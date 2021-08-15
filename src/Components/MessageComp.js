import {useState} from "react";

const MessageComp = (props) => {
    const [message, setMessage] = useState("");
    let onTextSubmit = () =>
    {
        if(message === "")
            return;
        props.addMessage(message);
        setMessage('');
    }
    let onKeyDown = e =>
    {
        if(e.code.indexOf("Enter") < 0 || message === "")
            return;
        props.addMessage(message);
        setMessage('');
    }
    return <div className="message">
        <input type="text" maxLength="30" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={onKeyDown}/>
        <button type="button" onClick={onTextSubmit}> Послать </button>
    </div>;
}

export default MessageComp;