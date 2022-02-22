import React from 'react';
import Book from './Book';
import Form from './Form';
import books from './books';

const BookList = () => (
  <div className="App">
    <h3>Book Lists</h3>
    <Book book={books[0]} />
    <Form />
  </div>
);

export default BookList;
