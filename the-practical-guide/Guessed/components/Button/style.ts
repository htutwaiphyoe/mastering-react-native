import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';
import {fontFamily} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    elevation: 2,
    borderRadius: 28,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.primary500,
  },
  containerSmall: {
    margin: 4,
    elevation: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.primary500,
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
