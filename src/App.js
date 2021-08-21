import React, {useState, useEffect} from "react";
import MessageComp from './Components/MessageComp'
import MessageListComp from "./Components/MessageListComp";
import ChatListComp from "./Components/ChatListComp";
import Message from "./Message";
import Chat from "./Chat";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  main: {
    height : "100vh",
    weight : "100wh",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
  },
  frame:{
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
  },
  frameLeft:{
    height: "800px",
    width: "300px"
  },
  frameRight: {
    display: "flex",
    flexDirection : "column",
    justifyContent: "stretch",
    height: "800px",
    width: "600px",
  }
}));
let currentUser = "Пользователь 1";
let botName = "Классный бот";

function App() {
  const classes = useStyles();
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([]);
  let addMessage = text =>{
    setMessageList( prev => [...prev, new Message(currentUser, text)]);
  }

  useEffect(() =>{
    setChatList([new Chat("", "Овик Хачикян"), new Chat("", "Дмитрий Ерохин"), new Chat("", "Андрей Осипук")]);
  }, []);
  useEffect( () => {
    if(messageList.length === 0 || messageList[messageList.length-1]?.Author === botName)
      return;
    setTimeout( () => setMessageList( prev => [...prev, new Message(botName, "Зачем ты это написал?")]), 1500);
  },[messageList])

  return (
    <div className={classes.main}>
      <div className={classes.frame}>
        <div className={classes.frameLeft}>
          <ChatListComp chatList={chatList}/>
        </div>
        <div className={classes.frameRight}>
          <MessageListComp messageList={messageList} />
          <MessageComp addMessage={addMessage}/>
        </div>
      </div>
    </div>
  );
}

export default App;
