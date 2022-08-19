import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    booktitle, id, author, category,
  } = book;
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <p>
        Book:
        {' '}
        {booktitle}
      </p>
      <p>
        Author:
        {' '}
        {author}
      </p>

      <p>
        Category:
        {' '}
        {category}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    booktitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;