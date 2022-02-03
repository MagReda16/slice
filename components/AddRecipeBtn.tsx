import React from "react";
import stylesBtn from '../styles/Button.module.css'


const AddRecipeBtn = () => {

  const addRecipe = () => {}

  return (
    <div>
      <button className={stylesBtn.addRecipeBtn}
      type='button'
      onClick={addRecipe}
      >+</button>
    </div>
  )
}

export default AddRecipeBtn;