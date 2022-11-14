const ADD = "ADD";
const REMOVE = "REMOVE";
const CLEAR = "CLEAR";
const INC = "INC";
const DEC = "DEC";
const SET = "SET";

export const cartReducer = (state = [], action) => {
  const { book, id, type, cart } = action;
  if (book && book.amount > 20) return state;
  switch (type) {
    case ADD:
      return [book, ...state];
    case INC:
      return incOrDec(state, action);
    case DEC:
      return incOrDec(state, action);
    case REMOVE:
      const copy = state;
      return copy.filter((value) => value._id !== id);
    case CLEAR:
      return [];
    case SET:
      return cart;
    default:
      return state;
  }
};

const incOrDec = (state, action) => {
  const { book } = action;
  const stateBis = state;
  return stateBis.map((val) => (val._id === book._id ? book : val));
};
