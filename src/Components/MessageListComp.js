import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

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
  }
}));

const MessageListComp = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.messageList}>
      {props.messageList.map( (item, i) => (
        <div key={i}>
          <p className={classes.messageHead}> {item.Date.toLocaleString()} &nbsp; <span className={classes.messageAuthor}>{item.Author}</span></p>
          <p className={classes.messageText}>{item.Text}</p>
        </div>
      )
      )}
    </Paper>
  )
}

export default MessageListComp;