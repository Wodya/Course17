import React, {useState} from "react";
import './App.css';
import MessageComp from './Components/MessageComp'

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input type="text" value={inputText} onChange = {e => setInputText(e.target.value)}/>
        <MessageComp showText={inputText} />
    </div>
  );
}

export default App;
