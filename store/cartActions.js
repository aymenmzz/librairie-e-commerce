const ADD = "ADD";
const REMOVE = "REMOVE";
const CLEAR = "CLEAR";
const INC = "INC";
const DEC = "DEC";
const SET = "SET";

export const addBookToCart = (book) => ({ type: ADD, book: newBook(book) });
export const addCopyToCart = (book) => ({ type: INC, book: addACopy(book) });
export const removeCopyFromCart = (book) => ({
  type: DEC,
  book: removeCopy(book),
});
export const clearCart = () => ({ type: CLEAR });
export const removeFromCart = (id) => ({ type: REMOVE, id });
export const setInitalCart = (cart) => ({ type: SET, cart });

const newBook = (book) => ({
  ...book,
  amount: 1,
});

const addACopy = (book) => {
  const { amount } = book;
  return { ...book, amount: amount + 1 };
};

const removeCopy = (book) => {
  const { amount } = book;
  return { ...book, amount: amount - 1 };
};
