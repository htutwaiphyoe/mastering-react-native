import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme/token';
import {fontFamily} from '../../utils';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 4,
    elevation: 2,
    borderRadius: width > 450 ? 28 : 12,
    paddingVertical: width > 450 ? 16 : 12,
    paddingHorizontal: width > 450 ? 24 : 16,
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
