import React from 'react';
import {colors} from './theme/token';
import {ImageBackground, StyleSheet} from 'react-native';
import {StartScreen} from './screens/StartScreen';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[colors.pink, colors.yellow]}
          style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.image}
            source={require('./assets/images/background.png')}>
            <StartScreen />
          </ImageBackground>
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
  image: {
    opacity: 0.15,
  },
});
