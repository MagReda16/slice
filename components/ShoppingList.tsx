import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import {Ingredient} from '../lib/types';


type ShoppingListProps = {
  data: Ingredient[]
}
const ShoppingList = ({data}: ShoppingListProps) => {

  return (
    <div>
      {data.map((ingredient: Ingredient) => <ShoppingListItem key={ingredient.id}   ingredient={ingredient} />)}
    </div>
  )
}

export default ShoppingList;