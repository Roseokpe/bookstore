import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {checkStatus} from '../redux/categories/categories'

const CategoryPage = () => {
  const categories = useSelector((state) => state.checkReducer.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkStatus())}>
        check status
      </button>
      <h1>{categories}</h1>
    </div>
  );

};

export default CategoryPage;