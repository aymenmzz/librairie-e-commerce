import {
  legacy_createStore as createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { indexReducer } from "./indexReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  index: indexReducer,
});

export const store = createStore(rootReducer);
