import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";
import thunkMiddleware from "redux-thunk";

export default configureStore({
  reducer: {
    chat: chatReducer,
    middleware: [thunkMiddleware],
  },
});
