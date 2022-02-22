import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [book, setBook] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setBook(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: uuid(),
    };

    dispatch(addBook(newBook));
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={book.title}
            onChange={handleInput}
          />
          <br />
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={book.author}
            onChange={handleInput}
          />
        </div>
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default Form;
