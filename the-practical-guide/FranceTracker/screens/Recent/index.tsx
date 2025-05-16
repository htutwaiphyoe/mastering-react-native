import {Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export function RecentScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>RecentScreen</Text>
      </View>
    </SafeAreaView>
  );
}
