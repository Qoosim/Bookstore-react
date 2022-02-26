import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../api/helperFunction';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-neutral-50 mt-4 py-6 border-solid border-2 border-black-50 rounded">
      <li key={book.item_id} className="mx-auto px-xs">
        <p className="text-slate-500">{book.category}</p>
        <h3 className="text-black text-2xl font-bold capitalize">{book.title}</h3>
        <span className="capitalize text-lg text-blueCustomize font-robSlab font-thin">Qoosim Abdul</span>
        <div className="pt-2">
          <button
            type="button"
            className="capitalize text-blueCustomize font-robSlab border-r-2 pr-4 font-thin"
          >
            comments
          </button>
          <button
            type="button"
            className="capitalize text-blueCustomize border-r-2 px-4 font-robSlab font-thin"
            onClick={() => dispatch(removeBookFromApi(book.item_id))}
          >
            remove
          </button>
          <button
            type="button"
            className="capitalize text-blueCustomize pl-4 font-robSlab font-thin"
          >
            edit
          </button>
        </div>
      </li>
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
