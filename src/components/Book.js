import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <div className="App">
    <div key={id}>
      <h4>{title}</h4>
      <h4>{author}</h4>
      <button type="button">remove</button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

/**
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
 */

export default Book;
