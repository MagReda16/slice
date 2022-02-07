import RecipeListItem from "./RecipeListItem";
import { Recipe } from "../db/types";
import styles from '../styles/RecipeList.module.css';

type RecipeListProps = {
  recipes: Recipe[]
  btnType: string
}

const RecipeList = ({ recipes, btnType }: RecipeListProps) => {
 


  return (
    <div className={styles.list}>
      {recipes.map((recipe, index) => <RecipeListItem key={recipe.recipeId} recipe={recipe} btnType={btnType} index={index} />)}
    </div>
  );
};

export default RecipeList;
