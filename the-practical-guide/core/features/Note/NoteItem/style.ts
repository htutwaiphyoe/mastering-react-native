import { colors } from '../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  note: {
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
    color: colors.black,
    backgroundColor: colors.white,
  },
  pressed: {
    opacity: 0.5,
  },
});
