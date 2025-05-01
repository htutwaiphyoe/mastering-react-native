import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';
import {fontFamily} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    padding: 28,
    elevation: 4,
    shadowRadius: 6,
    borderRadius: 12,
    shadowOpacity: 0.25,
    alignItems: 'center',
    shadowColor: colors.black,
    backgroundColor: colors.primary700,
    shadowOffset: {width: 0, height: 2},
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.accent500,
    fontFamily: fontFamily(),
  },
});
