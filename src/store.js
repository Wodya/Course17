import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Chat/chatSlice";
import profileSlice from "./Profile/profileSlice";

export default configureStore({
  reducer: {
    chat: chatReducer,
    profile: profileSlice,
  },
});
