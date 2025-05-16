import {styles} from './styles';
import {Alert, Image, View} from 'react-native';
import {IconButton} from '@/components/IconButton';
import {ScrollView, Text} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenNavigationProps, RecipeScreenRouteParam, Recipe} from '@/types';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, State} from '@/store';
import {favoriteRecipe, unfavoriteRecipe} from '@/store/slices/recipe';

export function RecipeScreen() {
  const dispatch = useDispatch<Dispatch>();
  const {params} = useRoute<RecipeScreenRouteParam>();
  const {goBack} = useNavigation<ScreenNavigationProps>();
  const recipes = useSelector<State, Recipe[]>(state => state.recipes.recipes);
  const recipe = recipes.find(item => item.Guid === params.id)!;

  const toggleFavorite = () => {
    if (!recipe?.Favorite) {
      return dispatch(favoriteRecipe(recipe?.Guid));
    }
    Alert.alert(
      'Remove from Favorite',
      'Do you want to remove this recipe from favorite?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => dispatch(unfavoriteRecipe(recipe.Guid)),
        },
      ],
    );
  };

  return (
    <View style={styles.screen}>
      <IconButton icon="left" style={styles.backButton} onPress={goBack} />
      <IconButton
        onPress={toggleFavorite}
        style={styles.favoriteButton}
        icon={recipe.Favorite ? 'heart' : 'hearto'}
      />
      <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{uri: recipe.Image}} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.Name}</Text>
          <View>
            <Text style={styles.subtitle}>ပါဝင်ပစ္စည်းများ</Text>
            <Text style={styles.description}>{recipe.Ingredients}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>ချက်ပြုတ်ပုံအဆင့်ဆင့်</Text>
            <Text style={styles.description}>{recipe.CookingInstructions}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
