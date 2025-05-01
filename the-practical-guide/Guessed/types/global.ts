export type Game = {
  guess: string;
  rounds: number[];
  screen: Screen;
};

export enum Screen {
  START = 'start',
  GAME = 'game',
  END = 'end',
}
