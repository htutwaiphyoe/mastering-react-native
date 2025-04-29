import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

type Game = {
  guess: string;
  screen: 'start' | 'game' | 'end';
};

type GameContext = Game & {
  goToStartScreen: () => void;
  goToGameScreen: (guess: string) => void;
};

const initialGameState: Game = {
  guess: '',
  screen: 'start',
};

const initialGameContext: GameContext = {
  ...initialGameState,
  goToGameScreen: () => {},
  goToStartScreen: () => {},
};

const GameContext = createContext<GameContext>(initialGameContext);

export const GameProvider = (props: PropsWithChildren) => {
  const [game, setGame] = useState<Game>(initialGameState);

  const goToGameScreen = useCallback(
    (guess: string) => setGame({guess, screen: 'game'}),
    [],
  );

  const goToStartScreen = useCallback(() => {
    setGame({guess: '', screen: 'start'});
  }, []);

  return (
    <GameContext.Provider value={{...game, goToGameScreen, goToStartScreen}}>
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
