import { colors } from '../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  notesContainer: {
    flex: 1,
    rowGap: 16,
  },
  noteHeading: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
  notes: {
    rowGap: 16,
  },
});
