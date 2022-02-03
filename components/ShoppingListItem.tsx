import React from "react";

interface Ingredient {
  id: number
  name: string,
  amount: number,
  unit: string
}
type ShoppingListItemProps = {
  ingredient: Ingredient
}

const ShoppingListItem = ({ingredient} : ShoppingListItemProps) => {
  return (
    <div>
      <h4>{ingredient.name}</h4>
    </div>
  )
}

export default ShoppingListItem;