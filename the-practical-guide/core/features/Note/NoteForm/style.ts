import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    rowGap: 16,
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  input: {
    padding: 16,
    height: 120,
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
