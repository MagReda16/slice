import Link from "next/link";
import { Recipe } from '../db/types/Recipe.type';
import { usePlan } from '../lib/hooks/usePlan';

import styles from '../styles/RecipeList.module.css';

type RecipeListProps = {
  recipe: Recipe
  btnType: string
  index: number
}

const RecipeListItem = ({ recipe, btnType, index }: RecipeListProps) => {

  const { addRecipeToPlan, removeRecipeFromPlan } = usePlan();

  const displayButton = () => {
    if (btnType === 'add') {
      return <button className={styles.addRecipeBtn} type="button" onClick={() => { addRecipeToPlan(recipe) }}>+</button>
    } else if (btnType === 'subtract') {
      return <button className={styles.addRecipeBtn} type="button" onClick={() => { removeRecipeFromPlan(index) }}>−</button>
    } else {
      return (
        <div className={styles.costInfo}>
          <p className={styles.totalCost}>Total Cost:</p>
          <p className={styles.dollarCost}>
            ${recipe.totalCost}
          </p>
        </div>
      )
    }
  }

  return (
    <div className={styles.recipeItemContainer}>
      <Link href={`/recipes/${recipe.recipeId}`} >
        <a>
          <img className={styles.recipeImage} src={recipe.image} alt={recipe.title} />
          <div className={styles.recipeInfo}>
            <p className={styles.title}>{recipe.title}</p>
            {btnType !== '' && <p>Total cost: $ {recipe.totalCost}</p>}
          </div>
        </a>
      </Link>
      {displayButton()}
    </div>
  )
}

export default RecipeListItem;
