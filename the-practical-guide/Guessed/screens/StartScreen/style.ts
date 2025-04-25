import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    elevation: 4,
    shadowRadius: 6,
    borderRadius: 8,
    shadowOpacity: 0.25,
    marginHorizontal: 24,
    shadowColor: colors.black,
    backgroundColor: colors.pink,
    shadowOffset: {width: 0, height: 2},
  },
});
