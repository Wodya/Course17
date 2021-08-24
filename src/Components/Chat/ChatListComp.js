import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  chatList: {
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
    margin: "10px",
  },
  input: {
    width: "70%"
  }
}));
const ChatListComp = (props) => {
  const classes = useStyles();

  return <div className={classes.chatList}>
    <List component="nav" aria-label="main mailbox folders">
      {props.chatList.map( (item, i) => (
        <ListItem key={i} button>
          <ListItemIcon>
            <ImageIcon />
          </ListItemIcon>
          <ListItemText primary={item.Name} />
        </ListItem>
      ))}
    </List>
  </div>;
}

ChatListComp.propTypes = {
  chatList : PropTypes.array.isRequired,
};
export default ChatListComp;