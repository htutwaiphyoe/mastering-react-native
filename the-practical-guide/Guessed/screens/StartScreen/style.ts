import {StyleSheet} from 'react-native';
import {colors} from '../../theme/token';

export const styles = StyleSheet.create({
  screen: {
    margin: 24,
    rowGap: 20,
  },
  input: {
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 2,
    color: colors.accent500,
    borderBottomColor: colors.accent500,
  },
  buttonContainer: {
    columnGap: 8,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
