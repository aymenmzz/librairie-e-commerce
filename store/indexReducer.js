import { NEXT, PREV } from "./indexActions";

export const indexReducer = (state = 0, action) => {
  const { modulo, type } = action;
  switch (type) {
    case NEXT:
      return (state + 1) % modulo;
    case PREV:
      return (state > 0 ? state : modulo) - 1;
    default:
      return state;
  }
};
