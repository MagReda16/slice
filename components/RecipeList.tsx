import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../db/types";

type RecipeListProps = {
  recipes: Recipe[]
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="">
      {recipes.map(recipe => <RecipeListItem key={recipe.recipeId} recipe={recipe} />)}
    </div>
  );
};

export default RecipeList;
