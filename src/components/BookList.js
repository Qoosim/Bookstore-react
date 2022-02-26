import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooksFromApi } from '../api/helperFunction';

const BookList = () => {
  const books = useSelector((state) => state.books);

  useEffect(() => {
    fetchBooksFromApi();
  }, []);

  return (
    <div className="container mx-auto px-md">
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              book={book}
            />
          ))
        }
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
