import {colors} from '@/theme';
import {styles} from './styles';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import {StyleProp} from 'react-native';

type IconButtonProps = PressableProps & {
  icon: IconProps['name'];
};

export function IconButton({icon, style, ...props}: IconButtonProps) {
  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        styles.button,
        pressed && styles.pressed,
        style as StyleProp<ViewStyle>,
      ]}>
      <Icon name={icon} size={20} color={colors.white} />
    </Pressable>
  );
}
