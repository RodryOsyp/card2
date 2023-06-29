import React, { createContext, useState } from 'react';

// Создание контекста
export const MyContext = createContext();

// Провайдер контекста
export const MyContextProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleExpDateChange = (value) => {
    setExpDate(value);
  };

  const handleCvcChange = (value) => {
    setCvc(value);
  };

  const handleExpYearChange = (value) => {
    // Обработчик для изменения года и сохранения его в состоянии
  };

  // Значение контекста, доступное для дочерних компонентов
  const contextValue = {
    text,
    name,
    expDate,
    cvc,
    handleTextChange,
    handleNameChange,
    handleExpDateChange,
    handleCvcChange,
    handleExpYearChange,
  };

  return React.createElement(
    MyContext.Provider,
    { value: contextValue },
    children
  );
};