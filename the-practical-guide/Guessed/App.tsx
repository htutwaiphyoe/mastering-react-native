import React from 'react';
import {colors} from '@/theme';
import {Navigation} from '@/navigation';
import {GameProvider} from '@/providers';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <GameProvider>
      <SafeAreaProvider>
        <LinearGradient
          style={styles.container}
          colors={[colors.primary500, colors.accent500]}>
          <ImageBackground
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.image}
            source={require('./assets/images/background.png')}>
            <SafeAreaView style={styles.container}>
              <StatusBar hidden />
              <Navigation />
            </SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      </SafeAreaProvider>
    </GameProvider>
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
