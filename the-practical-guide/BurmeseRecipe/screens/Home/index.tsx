import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {Text, View} from 'react-native';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
