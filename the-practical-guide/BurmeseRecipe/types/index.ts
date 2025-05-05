import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type UserType = '001' | '002';

export type Recipe = {
  Guid: string;
  Name: string;
  Image: string;
  Ingredients: string;
  CookingInstructions: string;
  UserType: UserType | (string & {});
};

export type RecipeList = Recipe[];

export type ScreenNavigationParams = {
  Home: undefined;
  Recipe: {data: Recipe};
};

export type HomeScreenNavigationParam = NativeStackNavigationProp<
  ScreenNavigationParams,
  'Home'
>;

export type RecipeScreenNavigationParam = NativeStackNavigationProp<
  ScreenNavigationParams,
  'Recipe'
>;
