import React, { useState } from "react";
import Link from "next/link";
import { Recipe } from '../db/types/Recipe.type'

import styles from '../styles/RecipeItem.module.css';

type RecipeListProps = {
  recipe: Recipe
}

const RecipeListItem = ({ recipe }: RecipeListProps) => {
  return (

    <div className={styles.recipeItemContainer}>
      <Link href=''>
        <a>
          <img src={recipe.image} alt="recipe image" />
            <div className={styles.recipeInfo}>
              <h3>{recipe.title}</h3>
              <h6>Total cost: $ {recipe.totalCost}</h6>
            </div>
        </a>
      </Link>
      <div>
        <button type="button" onClick={() => console.log('clicked')}>Add</button>
      </div>
    </div>

  )
}

export default RecipeListItem;
