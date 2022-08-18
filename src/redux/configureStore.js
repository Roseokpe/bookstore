import configureStore from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksReducers from './books/books';
import checkReducer from './categories/categories';

const reducer = combineReducers({
  booksReducers,
  checkReducer,
});

const store = configureStore({reducer:{books: addRemoveReducer, category:categoriesReducer} });
  (reducer, applyMiddleware(logger));

export default store;
