import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';

export const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    padding: 28,
    elevation: 4,
    shadowRadius: 6,
    borderRadius: 8,
    shadowOpacity: 0.25,
    marginHorizontal: 24,
    shadowColor: colors.black,
    backgroundColor: colors.pinkDark,
    shadowOffset: {width: 0, height: 2},
  },
  input: {
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.yellow,
    borderBottomWidth: 2,
    marginHorizontal: 'auto',
    borderBottomColor: colors.yellow,
  },
  buttonContainer: {
    columnGap: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
