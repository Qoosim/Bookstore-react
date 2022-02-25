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
    <div className="App">
      <h3 className="text-3xl font-bold text-yellow bg-blue-400">Book Lists</h3>
      <div>
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              book={book}
            />
          ))
        }
      </div>
      <Form />
    </div>
  );
};

export default BookList;
