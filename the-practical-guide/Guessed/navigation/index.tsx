import React, {Fragment} from 'react';
import {useGameContext} from '../providers';
import {GameScreen, StartScreen} from '../screens';

export function Navigation() {
  const {screen} = useGameContext();

  return (
    <Fragment>
      {screen === 'start' && <StartScreen />}
      {screen === 'game' && <GameScreen />}
    </Fragment>
  );
}
