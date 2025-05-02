import {styles} from './style';
import {PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';

type NumberProps = PropsWithChildren<TextProps>;

export function Number({style, children, ...props}: NumberProps) {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}
