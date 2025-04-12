import {Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Hello, React Native</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
