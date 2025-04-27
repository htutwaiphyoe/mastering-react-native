import {styles} from './style';
import {Text} from 'react-native';
import {PropsWithChildren} from 'react';

export function Title({children}: PropsWithChildren) {
  return <Text style={styles.title}>{children}</Text>;
}
