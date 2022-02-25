import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookToApi } from '../api/helperFunction';

const Form = () => {
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookCategory, setBookCategory] = React.useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (bookTitle && bookCategory) {
      const newBook = {
        item_id: uuid(),
        title: bookTitle.trim(),
        category: bookCategory.trim(),
      };
      dispatch(addBookToApi(newBook));
      setBookTitle('');
      setBookCategory('');
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
            placeholder="Category"
            name="author"
            value={bookCategory}
            onChange={(e) => setBookCategory(e.target.value)}
          />
        </div>
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default Form;
