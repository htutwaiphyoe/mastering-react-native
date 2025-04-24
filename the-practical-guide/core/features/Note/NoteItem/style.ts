import { colors } from '../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  noteItem: {
    width: '50%',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  pressed: {
    opacity: 0.5,
  },
  note: {
    flex: 1,
    minHeight: 150,
    justifyContent: 'space-between',
  },
  noteText: {
    fontSize: 20,
    color: colors.black,
    lineHeight: 28,
  },
  noteDate: {
    fontSize: 12,
    color: colors.blackLight,
    alignSelf: 'flex-end',
  },
});
