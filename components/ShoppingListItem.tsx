import React from "react";
import styles from '../styles/ShoppingListItem.module.css';
import { Ingredient } from '../lib/types'

type ShoppingListItemProps = {
  ingredient: Ingredient
}

const ShoppingListItem = ({ingredient} : ShoppingListItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <h4>{ingredient.name}</h4>
    </div>
  )
}

export default ShoppingListItem;