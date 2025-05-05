import {styles} from './styles';
import {userType} from '@/constants';
import {Recipe as TRecipe} from '@/types';
import {Image, Text, View} from 'react-native';

export type RecipeProps = {
  data: TRecipe;
};

export function Recipe({data}: RecipeProps) {
  return (
    <View key={data.Guid} style={styles.recipe}>
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
    </View>
  );
}
