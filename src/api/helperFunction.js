import {
  addBook,
  removeBook,
  getBooks,
} from '../redux/books/books';

const apiKey = 'D9gShb4thXdZON5kTrgR';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}`;

export const fetchBooksFromApi = () => async (dispatch) => {
  const url = `${baseUrl}/books`;
  const response = await fetch(url);
  const data = await response.json();
  const books = [];
  [...Object.entries(data)].forEach((bk) => {
    const book = {
      item_id: bk[0],
      title: bk[1][0],
      category: bk[1][0],
    };
    books.push(book);
  });

  if (response.ok) {
    dispatch(getBooks(books));
  }
};

export const addBookToApi = (newBook) => async (dispatch) => {
  const url = `${baseUrl}/books`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    dispatch(addBook(newBook));
  }
};

export const removeBookFromApi = (id) => async (dispatch) => {
  const url = `${baseUrl}/books/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

  if (response.ok) {
    dispatch(removeBook(id));
  }
};
