import React from 'react';
import {colors} from './theme/token';
import {StyleSheet} from 'react-native';
import {StartScreen} from './screens/StartScreen';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[colors.yellow, colors.pink]}
          style={styles.container}>
          <StartScreen />
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
