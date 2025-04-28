export type Game = {
  guess: string;
  screen: Screen;
};

export enum Screen {
  START = 'start',
  GAME = 'game',
  END = 'end',
}
