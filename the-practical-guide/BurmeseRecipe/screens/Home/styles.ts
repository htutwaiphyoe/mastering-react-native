import {colors} from '@/theme';
import {StyleSheet} from 'react-native';
import {fontFamily} from '@/utils/fontFamily';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    rowGap: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fontFamily('900'),
  },
});
