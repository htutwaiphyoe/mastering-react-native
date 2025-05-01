import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

export const styles = StyleSheet.create({
  log: {
    flex: 1,
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.primary600,
  },
  logText: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.accent500,
  },
  logNumber: {
    fontWeight: 'bold',
  },
});
