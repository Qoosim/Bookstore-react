import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../api/helperFunction';

const percentage = 72;

const Book = ({ book }) => {
  const id = book.item_id;
  const dispatch = useDispatch();

  return (
    <li key={id} className="mx-auto px-xs flex flex-row bg-neutral-50 mt-4 py-6 border-solid border-2 border-black-50 rounded">
      <div className="basis-1/2">
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
      </div>
      <div className="basis-1/4">
        <div>
          <div style={{ width: 72, height: 72 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h2 className="">72%</h2>
            <span className="capitalize">completed</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="capitalize">current chapter</p>
          <p className="capitalize">chapter 16</p>
          <button type="button" className="capitalize">update progress</button>
        </div>
      </div>
    </li>
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
