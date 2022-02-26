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
      <div className="mt-5">
        <h3 className="text-3xl font-mont mb-2 text-slate-500">Add New Book</h3>
        <form className="flex">
          <input
            className="flex-auto w-96 form-input mr-5 rounded"
            id="title"
            type="text"
            placeholder="Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <select
            className="flex-auto form-input mr-5 rounded"
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
          <button
            className="flex-auto bg-primary text-white py-2 rounded border-0"
            type="button"
            onClick={submitBookToStore}
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
