import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBookToApi } from '../api/helperFunction';

const categories = [
  'True Crime',
  'Horror',
  'Action & Adventure',
  'Comic',
  'Detective & Mystery',
  'Fantasy',
  'Historical Fiction',
  'Poetry',
  'Romance',
  'Short Stories',
  'Suspense & Thrillers',
  'Biographies',
  'Essays',
];

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
        <h3 className="">Add New Book</h3>
        <section>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <select
            id="category"
            value={bookCategory}
            onChange={(e) => setBookCategory(e.target.value)}
          >
            <option>Category</option>
            {
              categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <button type="button" onClick={submitBookToStore}>Add Book</button>
        </section>
      </form>
    </>
  );
};

export default Form;
