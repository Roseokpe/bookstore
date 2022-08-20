// actions type
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const urlLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nGPtGYQtMsTD4RLP7jGM/books';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const fetchBook = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state.action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);

    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const fetchBooksList = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(
    urlLink,
  );
  const booksID = Object.keys(res.data);
  const formatedBooks = [];
  booksID.map((key) => formatedBooks.push({
    id: key,
    title: res.data[key][0].title,
    author: res.data[key][0].author,
    category: res.data[key][0].category,
  }));

  return formatedBooks;
});

export const postBook = createAsyncThunk(ADD_BOOK, async (newBook) => {
  await axios.post(
    urlLink, {
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    },

    {
      'content-type': 'application/json; charset=UTF-8',
    },
  );
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(
    `${urlLink}/${id}`,
  );
  return { id };
});

export default booksReducer;
