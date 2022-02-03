import React from "react";
import stylesBtn from '../styles/Button.module.css'

const AdjustQuantityBtn = () => {

  const add = () => {

  }

  const subtract = () => {
    
  }

  return (
    <div>
      <button 
      className={stylesBtn.addQuantityBtn}
      type='button'
      onClick={add}
      >+</button>
      <button 
      className={stylesBtn.subtractQuantityBtn}
      type='button'
      onClick={subtract}
      >-</button>
    </div>
  )
}

export default AdjustQuantityBtn;