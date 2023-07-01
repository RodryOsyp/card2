import { useState } from "react";
import { Link } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Form from "./compot/Form/Form";
import Card from "./compot/Card/Card";
import { MyContext } from "./MyContext";

function App() {
  const [text, setText] = useState('0000 0000 0000 0000');
  const [name, setName] = useState('Tymur Bogdanovich');
  const [expDate, setExpDate] = useState('00/00');
  const [cvc, setCvc] = useState('000');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleExpDateChange = (newExpDate) => {
    setExpDate(newExpDate);
  };

  const handleCvcChange = (newCvc) => {
    setCvc(newCvc);
  };
  return (
    <>
    <div className="box">
      <div className="wrapper">
        
      <MyContext.Provider value={{
        text,
        name,
        expDate,
        cvc,
        handleTextChange,
        handleNameChange,
        handleExpDateChange,
        handleCvcChange,
      }}
    >
        <div className="gradient">
         <Card/>
        </div>
        <div className="form">
          
          <Form/>
        </div>
        </MyContext.Provider>
        
        
      </div>
      </div>
    </>
  );
}

export default App;
