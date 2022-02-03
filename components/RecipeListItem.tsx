import React, { useState } from "react";
import Link from "next/link";
import { Recipe } from '../db/types/Recipe.type'

import styles from '../styles/RecipeItem.module.css';
import stylesBtn from '../styles/Buttons.module.css';

type RecipeListProps = {
  recipe: Recipe
  btnType: string
}

const RecipeListItem = ({ recipe, btnType }: RecipeListProps) => {

  const addRecipe = () => {}
  const subtractRecipe = () => {}

  return (

    <div className={styles.recipeItemContainer}>
      <Link href=''>
        <a>
          <img className={styles.recipeImage} src={recipe.image} alt="recipe image" />
            <div className={styles.recipeInfo}>
              <h3>{recipe.title}</h3>
              <h6>Total cost: $ {recipe.totalCost}</h6>
            </div>
        </a>
      </Link>
      <div>
        {
        btnType === 'add' ?  <button className={stylesBtn.addRecipeBtn} type="button" onClick={(addRecipe) => console.log('clicked')}>Add</button> :
        btnType === 'subtract' ? <button className={stylesBtn.addRecipeBtn} type="button" onClick={(subtractRecipe) => console.log('clicked')}>Subtract</button> :
        <h1>Info Here</h1>
        }
      </div>
    </div>

  )
}

export default RecipeListItem;
