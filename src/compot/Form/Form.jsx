import React from 'react'
import style from './Form.module.css'

const Form = () => {
  return (
    <>
    <form className={style.form}>
  <label for="fname" className={style.name}>CARDHOLDER NAME:</label><br/>
  <input placeholder='e.g. Tymur Bogdanovich' type="text" id="fname" className={style.card} name="fname"/><br/>
  <label for="lname" className={style.number}>CARD NUMBER:</label><br/>
  <input placeholder='e.g. 1234 5678 9123 0000' type="text" id="lname" className={style.cardN} name="lname"/><br/>
  
  <div className={style.all}>
   <div >     
    <label   for="lname" className={style.date}>EXP. DATE (MM/YY)</label><br/>
    <div className={style.all2}> 
        <input placeholder='MM' type="text" id="lname" name="lname" className={style.mm}/>
        <input placeholder='YY' type="text" id="lname" name="lname" className={style.yy}/>
    </div>
    </div>



   <div className={style.allCvc}> 
    <label   for="lname" className={style.cvcN}>CVC</label><br/>
    <div> 
        <input placeholder='e.g. 123' type="text" id="lname" name="lname" className={style.cvc}/>
    </div>
   </div>



  </div>
  <div className={style.block}>
  <input type="submit" value={"Confirm"} className={style.confirm} />
  </div>
    </form>
    
    </>
  ) 
}

export default Form