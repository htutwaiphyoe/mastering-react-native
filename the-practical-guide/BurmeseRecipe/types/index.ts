import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type UserType = '001' | '002';

export type Recipe = {
  Guid: string;
  Name: string;
  Image: string;
  Favorite?: boolean;
  Ingredients: string;
  CookingInstructions: string;
  UserType: UserType | (string & {});
};

export type RecipeList = Recipe[];

export type ScreenNavigationParams = {
  Home: undefined;
  Recipe: {data: Recipe};
};

export type ScreenNavigationProps = NativeStackNavigationProp<
  ScreenNavigationParams,
  'Home',
  'Recipe'
>;

export type RecipeScreenRouteParam = RouteProp<
  ScreenNavigationParams,
  'Recipe'
>;
