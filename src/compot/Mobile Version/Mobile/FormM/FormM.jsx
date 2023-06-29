import React, { useContext, useState  } from 'react'
import style from './FormM.module.css'
import { MyContext } from '../../../../MyContext';
const FormM = () => {
  const {
    text,
    name,
    expDate,
    cvc,
    handleTextChange,
    handleNameChange,
    handleExpMonthChange,
    handleExpYearChange,
    handleCvcChange,
  } = useContext(MyContext);

  const handleCardNumberChange = (event) => {
    const inputText = event.target.value;
    let formattedText = inputText.replace(/\D/g, '');
    formattedText = formattedText.padEnd(16, '0').slice(0, 16);
    formattedText = formattedText.replace(/(\d{4}(?!\s))/g, '$1 ');
    handleTextChange(formattedText);
  };

  const handleNameInputChange = (event) => {
    const inputName = event.target.value;
    const trimmedName = inputName.slice(0, 20);
    handleNameChange(trimmedName);
  };

  const handleExpMonthInputChange = (event) => {
    const inputText = event.target.value;
    let formattedText = inputText.replace(/\D/g, '');
    formattedText = formattedText.padEnd(2, '0').slice(0, 2);
    handleExpMonthChange(formattedText);
  };

  const handleExpYearInputChange = (event) => {
    const inputText = event.target.value;
    let formattedText = inputText.replace(/\D/g, '');
    formattedText = formattedText.padEnd(2, '0').slice(0, 2);
    handleExpYearChange(formattedText);
  };

  const handleCvcInputChange = (event) => {
    const inputText = event.target.value;
    let formattedText = inputText.replace(/\D/g, '');
    formattedText = formattedText.padEnd(3, '0').slice(0, 3);
    handleCvcChange(formattedText);
  };

  return (
    <form className={style.form}>
      <label htmlFor="fname" className={style.name}>
        CARDHOLDER NAME:
      </label>
      <br />
      <input
        placeholder="e.g. Tymur Bogdanovich"
        type="text"
        id="fname"
        className={style.card}
        name="fname"
        onChange={handleNameInputChange}
      />
      <br />
      <label htmlFor="lname" className={style.number}>
        CARD NUMBER:
      </label>
      <br />
      <input
        placeholder="e.g. 1234 5678 9123 0000"
        type="text"
        id="lname"
        className={style.cardN}
        name="lname"
        onChange={handleCardNumberChange}
      />
      <br />

      <div className={style.all}>
        <div>
          <label htmlFor="expMonth" className={style.date}>
            EXP. DATE (MM/YY)
          </label>
          <br />
          <div className={style.all2}>
            <input
              placeholder="MM"
              type="text"
              id="expMonth"
              name="expMonth"
              className={style.mm}
              onChange={handleExpMonthInputChange}
            />
            <input
              placeholder="YY"
              type="text"
              id="expYear"
              name="expYear"
              className={style.yy}
              onChange={handleExpYearInputChange}
            />
          </div>
        </div>

        <div className={style.allCvc}>
          <label htmlFor="cvc" className={style.cvcN}>
            CVC
          </label>
          <br />
          <div>
            <input
              placeholder="e.g. 123"
              type="text"
              id="cvc"
              name="cvc"
              className={style.cvc}
              onChange={handleCvcInputChange}
            />
          </div>
        </div>
      </div>
      <div className={style.block}>
        <input type="submit" value={'Confirm'} className={style.confirm} />
      </div>
    </form>
  );
};
    
    

export default FormM
