import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Chat from "./Chat";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ImageIcon from "@material-ui/icons/Image";
import TestComp from './TestComp'
import MessageComp from "./MessageComp";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  main: {
    height : "100%",
    weight : "100%",
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
    width: "300px",
    display : "flex",
    justifyContent : "space-between",
    margin: "10px",
  },
  menuLink: {
    marginRight : "15px",
    textDecoration : "none",
    color : "red"
  },
  frameRight: {
    display: "flex",
    flexDirection : "column",
    justifyContent: "stretch",
    height: "600px",
    width: "600px",
  },
  messageList: {
    height : "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ChatComp = (props) => {
  const classes = useStyles();
  let {path, url} = useRouteMatch();

  const [chatList, setChatList] = useState([]);

  let addChat = text => {
    setChatList(prev => [...prev, new Chat("", text)]);
  }

  useEffect(() => {
    setChatList([new Chat(1, "Овик Хачикян"), new Chat(2, "Дмитрий Ерохин"), new Chat(3, "Андрей Осипук")]);
  }, []);

  return <div className={classes.main}>
    <div className={classes.frame}>
      <div className={classes.frameLeft}>
        <List component="nav" aria-label="main mailbox folders">
          {chatList.map((item, i) => (
            <ListItem key={i} button>
              <ListItemIcon>
                <ImageIcon/>
              </ListItemIcon>
              <Link to={`${url}/${item.id}`}>{item.name}</Link>
            </ListItem>
          ))}
        </List>
      </div>
      <Switch>
        <Route exact path={path}>
          <div className={classes.frameRight}>
          <Paper className={classes.messageList}>
            <h3>Выберите один из чатов</h3>
          </Paper>
        </div>;
        </Route>
          <Route path={`${path}/:id`}>
            <MessageComp chatList={chatList} />
          </Route>
      </Switch>
    </div>
  </div>;
}

export default ChatComp;