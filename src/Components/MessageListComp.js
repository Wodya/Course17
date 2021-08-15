const MessageListComp = (props) => {
  return (
    <div className="message-list">
      {props.messageList.map( (item, i) => (
        <div key={i}>
          <p className="message-head"> {item.Date.toLocaleString()} &nbsp; <span className="message-author">{item.Author}</span></p>
          <p className="message-text">{item.Text}</p>
        </div>
      )
      )}
    </div>
  )
}

export default MessageListComp;