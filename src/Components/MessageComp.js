import './css/MessageComp.css'
const MessageComp = (props) => {

    console.log(props);
    return <div className="compText">{props.showText}<div id="fix" /></div>
}

export default MessageComp;