import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

type Game = {
  guess?: string;
  screen: 'start' | 'game' | 'end';
};

type GameContext = Game & {
  goToGameScreen: (guess: string) => void;
};

const initialGameState: Game = {
  guess: '',
  screen: 'start',
};

const initialGameContext: GameContext = {
  ...initialGameState,
  goToGameScreen: () => {},
};

const GameContext = createContext<GameContext>(initialGameContext);

export const GameProvider = (props: PropsWithChildren) => {
  const [game, setGame] = useState<Game>(initialGameState);

  const goToGameScreen = useCallback(
    (guess: string) => setGame({guess, screen: 'game'}),
    [],
  );

  return (
    <GameContext.Provider value={{...game, goToGameScreen}}>
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
