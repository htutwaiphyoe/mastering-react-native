import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import {Game, Screen} from '@/types';

type GameContext = Game & {
  goToStartScreen: () => void;
  goToGameScreen: (guess: string) => void;
  goToEndScreen: () => void;
  increaseRounds: (guess: string) => void;
};

const initialGameState: Game = {
  guess: '',
  rounds: [],
  screen: Screen.START,
};

const initialGameContext: GameContext = {
  ...initialGameState,
  goToGameScreen: () => {},
  goToStartScreen: () => {},
  goToEndScreen: () => {},
  increaseRounds: () => {},
};

const GameContext = createContext<GameContext>(initialGameContext);

export const GameProvider = (props: PropsWithChildren) => {
  const [game, setGame] = useState<Game>(initialGameState);

  const goToGameScreen = useCallback(
    (guess: string) => setGame({guess, rounds: [], screen: Screen.GAME}),
    [],
  );

  const increaseRounds = useCallback((guess: string) => {
    setGame(prev => ({...prev, rounds: [+guess, ...prev.rounds]}));
  }, []);

  const goToStartScreen = useCallback(() => {
    setGame({guess: '', screen: Screen.START, rounds: []});
  }, []);

  const goToEndScreen = useCallback(() => {
    setGame(prev => ({...prev, screen: Screen.END}));
  }, []);

  return (
    <GameContext.Provider
      value={{
        ...game,
        goToGameScreen,
        goToStartScreen,
        goToEndScreen,
        increaseRounds,
      }}>
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
