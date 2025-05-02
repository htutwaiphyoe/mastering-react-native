import {colors} from '@/theme';
import {fontFamily} from '@/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  log: {
    flex: 1,
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.primary600,
  },
  logText: {
    fontSize: 18,
    fontFamily: fontFamily(),
    color: colors.accent500,
  },
  logNumber: {
    fontFamily: fontFamily('700'),
  },
});
