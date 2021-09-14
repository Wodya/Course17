import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";
import cardReducer from "./Card/cardSlice";
import thunkMiddleware from "redux-thunk";
import {cardSlice} from "./Card/cardSlice";

export default configureStore({
  reducer: {
    chat: chatReducer,
    card: cardReducer,
    middleware: [thunkMiddleware],
  },
});
