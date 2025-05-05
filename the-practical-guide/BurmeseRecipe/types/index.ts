export type UserType = '001' | '002';

export type Recipe = {
  Guid: string;
  Name: string;
  Ingredients: string;
  CookingInstructions: string;
  UserType: UserType;
};

export type RecipeList = Recipe[];
