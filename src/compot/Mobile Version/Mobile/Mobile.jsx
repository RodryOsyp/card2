import React from 'react'
import style from './Mobile.module.css';
import { useState } from "react";
import { MyContext } from '../../../MyContext';
import FormM from './FormM/FormM';
import CardM from './CardM/CardM';
const Mobile = () => {
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
    <div className={style.box}>
      <div className={style.wrapper}>
        
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
        <div className={style.gradient}>
        <CardM/>
        </div>
        <div className={style.form}>
          <FormM/>
        </div>
        </MyContext.Provider>
        
      </div>
      </div>
    </>
  )
}

export default Mobile
