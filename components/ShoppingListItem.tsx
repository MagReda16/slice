import React from "react";
import styles from '../styles/ShoppingListItem.module.css';
import { Ingredient } from '../lib/types'

type ShoppingListItemProps = {
  ingredient: Ingredient
}

const ShoppingListItem = ({ingredient} : ShoppingListItemProps) => {
  return (
    <div className={styles.itemContainer} >
      <p>{ingredient.name}</p>
      <p>{ingredient.amount} {ingredient.unit}</p>
    </div>
  )
}

export default ShoppingListItem;