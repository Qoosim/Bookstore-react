import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookAuthor, setBookAuthor] = React.useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (bookTitle && bookAuthor) {
      const newBook = {
        id: uuid(),
        title: bookTitle.trim(),
        author: bookAuthor.trim(),
      };
      dispatch(addBook(newBook));
      setBookTitle('');
      setBookAuthor('');
    }
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </div>
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default Form;
