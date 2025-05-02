import {Screen} from '@/types';
import React, {Fragment} from 'react';
import {useGameContext} from '@/providers';
import {GameScreen, StartScreen, EndScreen} from '@/screens';

export function Navigation() {
  const {screen} = useGameContext();

  return (
    <Fragment>
      {screen === Screen.START && <StartScreen />}
      {screen === Screen.GAME && <GameScreen />}
      {screen === Screen.END && <EndScreen />}
    </Fragment>
  );
}
