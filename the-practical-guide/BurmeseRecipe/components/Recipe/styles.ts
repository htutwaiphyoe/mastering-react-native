import {colors} from '@/theme';
import {fontFamily} from '@/utils/fontFamily';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  recipe: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.gray,
  },
  recipeImageContainer: {
    height: 160,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  recipeContent: {
    gap: 8,
    padding: 16,
  },
  recipeName: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fontFamily('700'),
  },
  recipeIngredient: {
    fontSize: 14,
    color: colors.lightGray,
    fontFamily: fontFamily('300'),
  },
  recipeUserType: {
    fontSize: 12,
    borderRadius: 8,
    paddingVertical: 8,
    color: colors.white,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    fontFamily: fontFamily('500'),
    backgroundColor: colors.primary,
  },
});
