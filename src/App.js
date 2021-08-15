import React, {useState, useEffect} from "react";
import './App.css';
import MessageComp from './Components/MessageComp'
import MessageListComp from "./Components/MessageListComp";
import Message from "./Message";

let currentUser = "Пользователь 1";
let botName = "Классный бот";
function App() {

  const [messageList, setMessageList] = useState([]);
  let addMessage = text =>{
    setMessageList( prev => [...prev, new Message(currentUser, text)]);
  }

  useEffect( () => {
    if(messageList.length === 0 || messageList[messageList.length-1]?.Author === botName)
      return;
    setTimeout( () => setMessageList( prev => [...prev, new Message(botName, "Зачем ты это написал?")]), 1500);
  },[messageList])

  return (
    <div className="frame">
      <MessageListComp messageList={messageList} />
      <MessageComp addMessage={addMessage} />
    </div>
  );
}

export default App;
