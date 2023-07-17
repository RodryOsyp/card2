import { useState } from "react";


import "./App.css";
import Form from "./compot/Form/Form";
import Card from "./compot/Card/Card";
import { MyContext } from "./MyContext";

function App() {
  const [text, setText] = useState('0000 0000 0000 0000');
  const [name, setName] = useState('Tymur Bogdanovich');
  const [expMonth, setExpMonth] = useState('00');
  const [expYear, setExpYear] = useState('00');
  const [cvc, setCvc] = useState('000');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleExpYearChange = (newExpYear) => {
    setExpYear(newExpYear);
  };

  const handleExpMonthChange = (newExpMonth) => {
    setExpMonth(newExpMonth);
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
        expMonth,
        expYear,
        cvc,
        handleTextChange,
        handleNameChange,
        handleExpMonthChange,
        handleExpYearChange,
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
