import { colors } from '../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  notesContainer: {
    flex: 1,
    rowGap: 16,
  },
  noteHeading: {
    fontSize: 32,
    fontWeight: 900,
    color: colors.black,
  },
  notes: {
    gap: 16,
  },
});
