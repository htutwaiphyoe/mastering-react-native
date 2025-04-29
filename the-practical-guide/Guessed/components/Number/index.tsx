import {styles} from './style';
import {Text, TextProps} from 'react-native';
import {PropsWithChildren} from 'react';

type NumberProps = PropsWithChildren<TextProps>;

export function Number({style, children, ...props}: NumberProps) {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}
