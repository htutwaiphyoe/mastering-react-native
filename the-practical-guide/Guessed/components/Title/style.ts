import {colors} from '@/theme';
import {fontFamily} from '@/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 32,
    borderRadius: 12,
    textAlign: 'center',
    color: colors.accent500,
    fontFamily: fontFamily('700'),
  },
});
