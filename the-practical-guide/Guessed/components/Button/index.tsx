import {colors} from '../../theme/token';
import {styles} from './style';
import {Pressable, PressableProps, Text, TextProps} from 'react-native';

type ButtonProps = PressableProps & {
  children: React.ReactNode;
  textProps?: TextProps;
};

export function Button({children, textProps = {}, ...props}: ButtonProps) {
  return (
    <Pressable
      {...props}
      android_ripple={{color: colors.primary700}}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <Text style={[styles.text, textProps.style]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
}
