const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/FETCH_BOOKS';

const initialState = [];

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
