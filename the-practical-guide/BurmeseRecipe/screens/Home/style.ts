import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    rowGap: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 8,
    columnGap: 16,
    padding: 16,
  },
  input: {
    fontSize: 16,
    color: colors.white,
  },
  scrollContainer: {
    flex: 1,
  },
  masonry: {
    gap: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  masonryItem: {
    backgroundColor: colors.gray,
    borderRadius: 8,
    flex: 1,
  },
});
