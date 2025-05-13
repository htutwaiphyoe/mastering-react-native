import {colors} from '@/theme';
import {styles} from './styles';
import {useLayoutEffect} from 'react';
import {Masonry} from '@/components/Masonry';
import {fontFamily} from '@/utils/fontFamily';
import {ScreenNavigationProps} from '@/types';
import recipes from '@/assets/data/recipes.json';
import {Recipe, RecipeProps} from '@/components/Recipe';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function FavoriteScreen() {
  const navigation = useNavigation<ScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Favorite Recipes',
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontSize: 24,
        color: colors.white,
        fontFamily: fontFamily('900'),
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right']}>
      <Masonry<RecipeProps['data']>
        cols={2}
        renderItem={({item}) => <Recipe data={item} key={item.Guid} />}
        data={recipes.filter(recipe => !!recipe.Favorite)}
      />
    </SafeAreaView>
  );
}
