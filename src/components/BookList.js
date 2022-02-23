import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="App">
      <h3>Book Lists</h3>
      <div>
        {
          books.map((book) => {
            const { id, title, author } = book;
            return (
              <Book
                key={id}
                id={id}
                title={title}
                author={author}
              />
            );
          })
        }
      </div>
      <Form />
    </div>
  );
};

export default BookList;
