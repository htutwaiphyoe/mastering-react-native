import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';
import {fontFamily} from '../../utils';
import {isSmallDevice} from '../../utils/isSmallDevice';

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    elevation: 2,
    backgroundColor: colors.primary500,
    borderRadius: isSmallDevice() ? 12 : 28,
    paddingVertical: isSmallDevice() ? 12 : 16,
    paddingHorizontal: isSmallDevice() ? 16 : 24,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontFamily('400'),
  },
  pressed: {
    opacity: 0.75,
  },
});
