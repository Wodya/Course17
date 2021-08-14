import React, {useState} from "react";
import './App.css';
import MessageComp from './Components/MessageComp'

function App() {
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);

  console.log(count);
  console.log('Запуск');
  const onInputChanged = e =>
  {
    setInputText(e.target.value);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange = {onInputChanged}/>
        <MessageComp showText={inputText} />
    </div>
  );
}

export default App;
