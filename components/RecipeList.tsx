import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../db/types";

type RecipeListProps = {
  recipes: Recipe[]
  btnType: string
}

const RecipeList = ({ recipes, btnType }: RecipeListProps) => {


  return (
    <div className="">
      {recipes.map(recipe => <RecipeListItem key={recipe.recipeId} recipe={recipe} btnType={btnType}/>)}
    </div>
  );
};

export default RecipeList;
