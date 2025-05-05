import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
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
    padding: 20,
    columnGap: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  input: {
    fontSize: 16,
    height: 18,
    color: colors.white,
    alignItems: 'center',
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
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.gray,
  },
  image: {
    height: 180,
    width: '100%',
    objectFit: 'cover',
  },
  recipeContent: {
    gap: 8,
    padding: 16,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  recipeIngredient: {
    fontSize: 14,
    color: colors.lightGray,
  },
  recipeUserType: {
    fontSize: 12,
    borderRadius: 8,
    paddingVertical: 8,
    color: colors.white,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
  },
});
