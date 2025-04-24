import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const styles = StyleSheet.create({
  formContainer: {
    rowGap: 16,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 16,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    color: colors.black,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
