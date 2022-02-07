import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import {Ingredient} from '../lib/types';
import styles from '../styles/ShoppingList.module.css';


type ShoppingListProps = {
  data: Ingredient[]
}
const ShoppingList = ({data}: ShoppingListProps) => {

  return (
    <div className={styles.shoppingListContainer}>
      {data.map((ingredient: Ingredient) => <ShoppingListItem key={ingredient.id}   ingredient={ingredient} />)}
    </div>
  )
}

export default ShoppingList;