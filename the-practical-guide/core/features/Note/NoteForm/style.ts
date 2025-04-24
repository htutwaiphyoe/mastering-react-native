import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    rowGap: 16,
    flex: 1,
    padding: 16,
  },
  input: {
    padding: 16,
    height: 200,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.black,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    columnGap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    padding: 16,
    height: 85,
    backgroundColor: colors.white,
  },
});
