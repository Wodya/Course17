import React, { useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    messageGroup: {
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        margin: "10px",
    },
    input: {
        width: "70%"
    }
}));
const MessageComp = (props) => {
    const classes = useStyles();
    let textInputRef = useRef(null);

    const [message, setMessage] = useState("");
    let SendMessage = () =>{
        if(message === "")
            return;
        props.addMessage(message);
        setMessage('');
        console.log(textInputRef);
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
    return <div className={classes.messageGroup}>
        <TextField inputRef={textInputRef} autoFocus className={classes.input} multiline value={message} onChange={e => setMessage(e.target.value)} onKeyDown={onKeyDown} label="Введите сообщение"/>
        <Button variant="contained" color="primary" onClick={onTextSubmit}> Послать </Button>
    </div>;
}

export default MessageComp;