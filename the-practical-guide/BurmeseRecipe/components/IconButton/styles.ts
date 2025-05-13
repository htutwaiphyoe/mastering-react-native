import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    padding: 10,
    opacity: 0.7,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: colors.background,
  },
  pressed: {
    opacity: 0.5,
  },
});
