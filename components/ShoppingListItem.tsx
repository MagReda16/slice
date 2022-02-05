import React from "react";
import styles from '../styles/ShoppingList.module.css';
import { Ingredient } from '../lib/types'

type ShoppingListItemProps = {
  ingredient: Ingredient
}


const ShoppingListItem = ({ingredient} : ShoppingListItemProps) => {

  const ingredientName = ingredient.name[0].toUpperCase() + ingredient.name.substring(1)

  return (
    <div className={styles.itemContainer} >
      <p>{ingredientName}</p>
      <p>{ingredient.amount} {ingredient.unit}</p>
    </div>
  )
}

export default ShoppingListItem;