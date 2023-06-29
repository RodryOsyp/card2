import React, { useContext } from 'react';
import  {MyContext}  from "../../../../MyContext";
import style from "./CardM.module.css";
const CardM = () => {
    const { text, name, expDate, cvc } = useContext(MyContext);

  return (
    <div>
      <div className={style.card2}>
        <img src="src/compot/Card/img2.png" alt="" className={style.img2} />
        <div className={style.text2}>{cvc}</div>
      </div>

      <div className={style.card1}>
        <img src="src/compot/Card/img1.png" alt="" className={style.img} />
        <div className={style.text}>{text}</div>
        <div className={style.name}>{name}</div>
        <div className={style.date}>{expDate}</div>
      </div>
    </div>
  );
};

export default CardM;
