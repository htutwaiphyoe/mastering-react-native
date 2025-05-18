import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {transactionSlice} from './slices/transaction';

const reducer = combineReducers({
  transactions: transactionSlice.reducer,
});

export const store = configureStore({reducer});

export type State = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
