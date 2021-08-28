import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    myId: 1,
    chats: [
      {
        id: 2,
        name: "Joe Doe",
        avatarUrl: "https://material-ui.com/static/images/avatar/1.jpg",
        messagesArray: [
          {
            timeStamp: moment("1995-12-17T03:21:00").valueOf(),
            userId: 1,
            text: "Привет",
            isRead: true,
          },
          {
            timeStamp: moment("1995-12-17T03:24:00").valueOf(),
            userId: 2,
            text: "Тебе тоже привет Joe, Тебе тоже привет Joe, Тебе тоже привет Joe, Тебе тоже привет Joe",
            isRead: false,
          },
        ],
      },
      {
        id: 3,
        name: "Иван Кузнецов",
        avatarUrl: "https://material-ui.com/static/images/avatar/2.jpg",
        messagesArray: [
          {
            timeStamp: moment("1995-12-17T03:24:00").valueOf(),
            userId: 1,
            text: "Привет",
            isRead: true,
          },
          {
            timeStamp: moment("1995-12-17T03:28:00").valueOf(),
            userId: 3,
            text: "Тебе тоже привет Иван",
            isRead: false,
          },
          {
            timeStamp: moment("1995-12-17T03:28:00").valueOf(),
            userId: 3,
            text: "Тебе тоже привет Иван",
            isRead: false,
          },
          {
            timeStamp: moment("1995-12-17T03:28:00").valueOf(),
            userId: 3,
            text: "Тебе тоже привет Иван",
            isRead: false,
          },
        ],
      },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, messageText } = action.payload;
      const chatIndex = state.chats.findIndex((chat) => chat.id === chatId);
      const chat = state.chats[chatIndex];
      chat.messagesArray.push({
        text: messageText,
        timeStamp: new moment().valueOf(),
        isRead: false,
        userId: state.myId,
      });

      const newChats = [...state.chats];
      newChats.splice(chatIndex, 1);
      newChats.unshift(chat);
      state.chats = newChats;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
