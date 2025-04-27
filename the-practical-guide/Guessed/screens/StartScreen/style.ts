import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';

export const styles = StyleSheet.create({
  screen: {
    margin: 24,
    rowGap: 20,
  },
  container: {
    padding: 28,
    rowGap: 20,
    elevation: 4,
    shadowRadius: 6,
    borderRadius: 12,
    shadowOpacity: 0.25,
    alignItems: 'center',
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
    borderBottomColor: colors.yellow,
  },
  buttonContainer: {
    columnGap: 8,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
