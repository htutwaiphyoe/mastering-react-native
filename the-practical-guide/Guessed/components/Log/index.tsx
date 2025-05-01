import {styles} from './style';
import {Text, View} from 'react-native';

type LogProps = {
  log: number;
  roundNo: number;
};

export function Log({log, roundNo}: LogProps) {
  return (
    <View style={styles.log}>
      <Text style={styles.logText}>
        Round #{roundNo} guess: <Text style={styles.logNumber}>{log}</Text>
      </Text>
    </View>
  );
}
