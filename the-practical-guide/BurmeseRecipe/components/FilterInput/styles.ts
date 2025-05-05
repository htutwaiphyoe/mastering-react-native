import {colors} from '@/theme';
import {StyleSheet} from 'react-native';
import {fontFamily} from '@/utils/fontFamily';

export const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    columnGap: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  input: {
    height: 18,
    fontSize: 16,
    color: colors.white,
    alignItems: 'center',
    fontFamily: fontFamily(),
  },
});
