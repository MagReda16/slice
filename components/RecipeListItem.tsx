import React, { useState } from "react";
import Link from "next/link";
import { Recipe } from '../db/types/Recipe.type';
import { usePlan } from '../lib/hooks/usePlan';

import styles from '../styles/RecipeItem.module.css';
import stylesBtn from '../styles/Buttons.module.css';

type RecipeListProps = {
  recipe: Recipe
  btnType: string
  index: number
}

const RecipeListItem = ({ recipe, btnType, index }: RecipeListProps) => {

  const { addRecipeToPlan, removeRecipeFromPlan} = usePlan();


  return (

    <div className={styles.recipeItemContainer}>
      <Link href={`/recipes/${recipe.recipeId}`} >
        <a>
          <img className={styles.recipeImage} src={recipe.image} alt="recipe image" />
            <div className={styles.recipeInfo}>
              {
                (btnType === '') ?  <h3 className={styles.title}>{recipe.title}</h3> : <h3 className={styles.title2}>{recipe.title}</h3>
              }
              {
               (btnType !== '') &&
              <h6>Total cost: $ {recipe.totalCost}</h6>
              }

            </div>
        </a>
      </Link>
      <div>
        {
        btnType === 'add' ?  <button className={stylesBtn.addRecipeBtn} type="button" onClick={() => {addRecipeToPlan(recipe)}}>+</button> :
        btnType === 'subtract' ? <button className={stylesBtn.addRecipeBtn} type="button" onClick={() => {removeRecipeFromPlan(index)}}>-</button> :
        <div>
          <h3 className={styles.totalCost}>Total Cost: </h3>
          <h2 className={styles.dollarCost}>
            ${recipe.totalCost}
          </h2>
        </div>
        }
      </div>
    </div>

  )
}

export default RecipeListItem;
