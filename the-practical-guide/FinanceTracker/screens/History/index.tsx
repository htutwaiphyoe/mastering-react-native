import {styles} from './styles';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function HistoryScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>HistoryScreen</Text>
      </View>
    </SafeAreaView>
  );
}
