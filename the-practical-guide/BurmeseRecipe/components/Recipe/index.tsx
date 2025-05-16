import {styles} from './styles';
import {userType} from '@/constants';
import {ScreenNavigationProps, Recipe as TRecipe} from '@/types';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';

export type RecipeProps = {
  data: TRecipe;
};

export function Recipe({data}: RecipeProps) {
  const navigation = useNavigation<ScreenNavigationProps>();

  return (
    <Pressable
      key={data.Guid}
      style={({pressed}) => [styles.recipe, pressed && styles.recipePressed]}
      onPress={() => navigation.navigate('Recipe', {id: data.Guid})}>
      <View style={styles.recipeImageContainer}>
        <Image style={styles.recipeImage} source={{uri: data.Image}} />
      </View>
      <View style={styles.recipeContent}>
        <Text style={styles.recipeName}>{data.Name}</Text>
        <Text
          style={styles.recipeIngredient}
          numberOfLines={1}
          ellipsizeMode="tail">
          {data.Ingredients}
        </Text>
        <Text style={styles.recipeUserType}>{userType[data.UserType]}</Text>
      </View>
    </Pressable>
  );
}
