import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {db} from "../App";
import firebase from "firebase/compat";

const useStyles = makeStyles(() => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "1px solid black",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },

  senderMessage: {
    alignSelf: "flex-start",
    maxWidth: "60%",
    backgroundColor: "#212121",
  },
  userMessage: {
    alignSelf: "flex-end",
    maxWidth: "60%",
    backgroundColor: "#8475DA",
  },

  message: {
    color: "white",
    boxSizing: "border-box",
    padding: "5px 10px",
    margin: "10px 5px",
    borderRadius: "30px",
  },
}));

const MessageList = ({ messagesArray }) => {

  // db.ref("users").get().then(value => console.log('users',value[0]));
  const classes = useStyles();
  const { myId } = useSelector((state) => state.chat);

  return (
    <div className={`${classes.messageList} messageList`}>
      {messagesArray &&
        messagesArray.map((message, i) => (
          <div
            key={i}
            className={`
            ${
              message.authorId === myId
                ? classes.userMessage
                : classes.senderMessage
            } ${classes.message}`}
          >
            {message.messageText}
          </div>
        ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
