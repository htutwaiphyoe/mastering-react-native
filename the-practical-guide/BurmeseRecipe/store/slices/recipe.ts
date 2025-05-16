import {createSlice} from '@reduxjs/toolkit';
import recipes from '@/assets/data/recipes.json';

type RecipeState = {
  recipes: typeof recipes;
};

const initialState: RecipeState = {
  recipes,
};

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    favoriteRecipe: (state, action) => {
      const recipe = state.recipes.find(item => item.Guid === action.payload);
      if (recipe) {
        recipe.Favorite = true;
      }
    },
    unfavoriteRecipe: (state, action) => {
      const recipe = state.recipes.find(item => item.Guid === action.payload);
      if (recipe) {
        recipe.Favorite = false;
      }
    },
  },
});

export const {favoriteRecipe, unfavoriteRecipe} = recipeSlice.actions;
