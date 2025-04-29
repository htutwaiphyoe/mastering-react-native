import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    rowGap: 12,
    padding: 28,
  },
  controls: {
    padding: 12,
    rowGap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'center',
    color: colors.accent500,
  },
  buttons: {
    columnGap: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
});
