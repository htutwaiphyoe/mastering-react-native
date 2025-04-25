import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StartScreen} from './screens/StartScreen';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StartScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
