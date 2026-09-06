import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NativeDeviceModel from './specs/NativeDeviceModel';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left']}>
        <View style={styles.page}>
          <Text>{NativeDeviceModel.getDeviceModel()}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
