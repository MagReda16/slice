import React, {useState} from "react";
import {Recipe} from '../db/types/Recipe.type'

type RecipeListProps = {
  recipe: Recipe
}

const RecipeListItem = ({recipe}: RecipeListProps) => {
  return (
    <div>
      {recipe.title}
    </div>
  )
}

export default RecipeListItem;
