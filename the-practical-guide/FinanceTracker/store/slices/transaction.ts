import {createSlice} from '@reduxjs/toolkit';

type Transaction = {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: 'income' | 'expense';
};

type TransactionState = {
  transactions: Transaction[];
};

const initialState: TransactionState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        transaction => transaction.id !== action.payload.id,
      );
    },
  },
});

export const {addTransaction, removeTransaction} = transactionSlice.actions;
