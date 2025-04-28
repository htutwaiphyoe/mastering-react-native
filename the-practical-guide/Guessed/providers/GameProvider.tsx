import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import {Game, Screen} from '../types/global';

type GameContext = Game & {
  goToStartScreen: () => void;
  goToGameScreen: (guess: string) => void;
  goToEndScreen: () => void;
};

const initialGameState: Game = {
  guess: '',
  screen: Screen.START,
};

const initialGameContext: GameContext = {
  ...initialGameState,
  goToGameScreen: () => {},
  goToStartScreen: () => {},
  goToEndScreen: () => {},
};

const GameContext = createContext<GameContext>(initialGameContext);

export const GameProvider = (props: PropsWithChildren) => {
  const [game, setGame] = useState<Game>(initialGameState);

  const goToGameScreen = useCallback(
    (guess: string) => setGame({guess, screen: Screen.GAME}),
    [],
  );

  const goToStartScreen = useCallback(() => {
    setGame({guess: '', screen: Screen.START});
  }, []);

  const goToEndScreen = useCallback(() => {
    setGame({guess: '', screen: Screen.END});
  }, []);

  return (
    <GameContext.Provider
      value={{...game, goToGameScreen, goToStartScreen, goToEndScreen}}>
      {props.children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};
