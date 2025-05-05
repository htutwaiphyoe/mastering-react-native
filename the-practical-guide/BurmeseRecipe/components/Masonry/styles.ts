import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  masonryContainer: {
    flex: 1,
  },
  masonry: {
    gap: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  masonryColumn: {
    gap: 16,
    flexDirection: 'column',
  },
});
