import {colors} from '../../theme/token';
import {styles} from './style';
import {Pressable, PressableProps, Text} from 'react-native';

type ButtonProps = PressableProps & {
  children: React.ReactNode;
};

export function Button({children, ...props}: ButtonProps) {
  return (
    <Pressable
      android_ripple={{color: colors.pinkDark}}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
