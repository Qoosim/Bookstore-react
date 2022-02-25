import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../api/helperFunction';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div key={book.item_id}>
        <h4>{book.title}</h4>
        <h4>{book.category}</h4>
        <button
          type="button"
          onClick={() => dispatch(removeBookFromApi(book.item_id))}
        >
          remove
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
