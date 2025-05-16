import {configureStore} from '@reduxjs/toolkit';
import {recipeSlice} from '@/store/slices/recipe';
import {userSlice} from '@/store/slices/users';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  recipes: recipeSlice.reducer,
  users: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['recipes', 'users'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type State = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
