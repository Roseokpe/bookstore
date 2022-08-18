import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducers from './books/books';
import checkReducer from './categories/categories';

const baseReducer = combineReducers({
  books: booksReducers,
  category: checkReducer,
});

const store = configureStore({ reducer: baseReducer });

export default store;
