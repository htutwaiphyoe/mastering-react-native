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
