import React from 'react'
import style from './Card.module.css'

const Card = () => {
  return (
    <div>
        <div className={style.card1}>
          <img src="src/compot/Card/img1.png" alt="" className={style.img} />
          <div className={style.text}>0000 0000 0000 0000</div>
          <div className={style.name}>Tymur Bogdanovich</div>
          <div className={style.date}>00/00</div>
        </div>
        
        <div className={style.card2}>
        <img src="src/compot/Card/img2.png" alt="" className={style.img}/>
        <div className={style.text2}>000</div>
        </div>
    </div>
  )
}

export default Card
