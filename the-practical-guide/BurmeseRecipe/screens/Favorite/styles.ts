import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  header: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
});
