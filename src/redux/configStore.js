import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk),
);

export default store;
