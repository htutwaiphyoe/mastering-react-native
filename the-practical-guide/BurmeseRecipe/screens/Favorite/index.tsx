import {State} from '@/store';
import {colors} from '@/theme';
import {styles} from './styles';
import {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import {Masonry} from '@/components/Masonry';
import {fontFamily} from '@/utils/fontFamily';
import {useNavigation} from '@react-navigation/native';
import {Recipe, RecipeProps} from '@/components/Recipe';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Recipe as TRecipe, ScreenNavigationProps} from '@/types';
import {Text, View} from 'react-native';

export function FavoriteScreen() {
  const navigation = useNavigation<ScreenNavigationProps>();
  const recipes = useSelector<State, TRecipe[]>(state => state.recipes.recipes);

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
        renderEmpty={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favorite recipes found.</Text>
            <Text style={styles.emptyText}>
              Please add some to your favorites.
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
