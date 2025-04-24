import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  primary: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    color: colors.black,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  primaryDisabled: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    color: colors.black,
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  secondary: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  secondaryDisabled: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  white: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: colors.white,
  },
  whiteDisabled: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: colors.white,
  },
  whiteText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
});
