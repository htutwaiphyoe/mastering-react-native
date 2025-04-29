import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    elevation: 2,
    borderRadius: 28,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.primary500,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
