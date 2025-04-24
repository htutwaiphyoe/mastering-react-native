import { styles } from './style';
import { Pressable, PressableProps, Text } from 'react-native';

type ButtonProps = Omit<PressableProps, 'children'> & {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
};

export function Button({ variant, children, disabled, ...props }: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={[styles[variant], disabled && styles[`${variant}Disabled`]]}
      {...props}>
      <Text style={styles[`${variant}Text`]}>{children}</Text>
    </Pressable>
  );
}
