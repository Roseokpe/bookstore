import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    title, id, author, category,
  } = book;
  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(deleteBook(id));
  };

  const chapterVal = Math.round(Math.random() * 20);
  return (
    <li key={id} className="d_flex">
      <div className="firsCol">
        <p className="title">
          Book:
          {' '}
          {title}
        </p>
        <p className="Author">
          Author:
          {' '}
          {author}
        </p>
        <p className="category">
          Category:
          {' '}
          {category}
        </p>
        <button type="button" onClick={HandleRemove}>
          Remove
        </button>
      </div>
      <ul className="secondCol d_flex">
        <li>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={Math.round((chapterVal / 20) * 100)} />
          </div>
        </li>
        <li>
          <p className="percentageVal">
            {Math.round((chapterVal / 20) * 100)}
            %
          </p>
          <p className="completed">completed</p>
        </li>
        <li>
          <div className="lastCol">
            <p className="currChapter">CURRENT CHAPTER</p>
            <p id="chapter">
              Chapter
              {' '}
              {chapterVal}
            </p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </li>
      </ul>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
