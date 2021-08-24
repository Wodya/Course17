import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useRef, useState} from "react";
import {useParams} from "react-router-dom";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
  messageList: {
    height : "100%"
  },
  messageHead:{
    marginBottom: "5px",
    marginLeft: "10px",
  },
  messageAuthor: {
    fontStyle: "italic",
    color: "darkred"
  },
  messageText:{
    marginLeft: "25px",
    marginTop: "0",
    color: "darkblue",
  },
  frameRight: {
    display: "flex",
    flexDirection : "column",
    justifyContent: "stretch",
    height: "600px",
    width: "600px",
  },
  messageGroup: {
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
    margin: "10px",
  },
}));

let currentUser = "Пользователь 1";

const MessageComp = (props) => {
  let { id } = useParams();

  const classes = useStyles();
  let textInputRef = useRef(null);
  const [message, setMessage] = useState("");
  let chat = props.chatList.find(p => p.id === +id);
  console.log(chat);
  console.log(props.chatList);
  console.log(id);

  let SendMessage = () =>{
    if(message === "")
      return;
    chat.messageList = [...chat.messageList, new Message(currentUser, message)];
    setMessage('');
    textInputRef.current.focus();
  }
  let onTextSubmit = () =>
  {
    SendMessage();
  }
  let onKeyDown = e =>
  {
    if(e.code.indexOf("Enter") < 0 || message === "")
      return;
    SendMessage();
  }

  if(chat === undefined)
    return <div className={classes.frameRight}>
      <Paper className={classes.messageList}>
        Чат не существует
      </Paper>
    </div>;
  return <div className={classes.frameRight}>
    <Paper className={classes.messageList}>
      {chat.messageList.map((item, i) => (
          <div key={i}>
            <p className={classes.messageHead}> {item.Date.toLocaleString()} &nbsp; <span className={classes.messageAuthor}>{item.Author}</span></p>
            <p className={classes.messageText}>{item.Text}</p>
          </div>
        )
      )}
    </Paper>
    <div className={classes.messageGroup}>
      <TextField inputRef={textInputRef} autoFocus className={classes.input} multiline value={message} onChange={e => setMessage(e.target.value)} onKeyDown={onKeyDown} label="Введите сообщение"/>
      <Button variant="contained" color="primary" onClick={onTextSubmit}> Послать </Button>
    </div>
  </div>;
}
MessageComp.propTypes = {
  chatList : PropTypes.array.isRequired,
};
export default MessageComp;