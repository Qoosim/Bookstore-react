import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;

  return (
    <div className="App">
      <div>
        <h4>{title}</h4>
        <h4>{author}</h4>
        <button type="button">remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
