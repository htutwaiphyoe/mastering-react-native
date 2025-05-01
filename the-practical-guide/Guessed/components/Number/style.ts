import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

export const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 32,
    fontWeight: 700,
    borderRadius: 12,
    textAlign: 'center',
    color: colors.accent500,
    borderWidth: 2,
    borderColor: colors.accent500,
    fontFamily: fonts.bold,
  },
});
