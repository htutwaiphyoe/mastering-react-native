import {PropsWithChildren} from 'react';
import {styles} from './style';
import {Text, View} from 'react-native';

type CardProps = PropsWithChildren<{
  title?: string;
}>;

export function Card({children, title}: CardProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}
