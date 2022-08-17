const ADD_BOOKS = 'bookstore/books/ADD_BOOKS';
const REMOVE_BOOKS = 'bookstore/books/REMOVE_BOOKS';

const initalState = [];

// export Actions creator for Actions

export const addBooks = (payload) => ({
  type: ADD_BOOKS,
  payload,
});

export const removeBooks = (payload) => ({
  type: REMOVE_BOOKS,
  payload,
});

// reducer

const bookReducers = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return [...state, action.payload];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducers;
