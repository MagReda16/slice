import Link from 'next/link';
import { Recipe } from '../db/types/Recipe.type';
import { usePlan } from '../lib/hooks/usePlan';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/RecipeList.module.css';
import buttonStyles from '../styles/Buttons.module.css';

type RecipeListProps = {
  recipe: Recipe;
  btnType: string;
  index: number;
};

const RecipeListItem = ({ recipe, btnType, index }: RecipeListProps) => {
  const { addRecipeToPlan, decrementRecipeQuantity, incrementRecipeQuantity } =
    usePlan();

  const displayButton = () => {
    if (btnType === 'add') {
      return (
        <button
          className={styles.addRecipeBtn}
          type="button"
          onClick={() => {
            addRecipeToPlan(recipe);
            toast.success('Recipe Added', {
              position: 'top-center',
              theme: 'light',
              autoClose: 200,
              draggable: false,
              hideProgressBar: true,
              closeOnClick: true,
              progress: undefined,
              transition: Slide
            })
          }}
        >
          +
        </button>
      );
    } else if (btnType === 'edit') {
      return (
        <div className={styles.quantityContainer}>
          <button
            className={buttonStyles.addQuantityBtn}
            type="button"
            onClick={() => {
              incrementRecipeQuantity(index);
            }}
          />
          <h3>{recipe.quantity}</h3>
          <button
            className={buttonStyles.subtractQuantityBtn}
            type="button"
            onClick={() => {
              decrementRecipeQuantity(index);
            }}
          />
        </div>
      );
    } else {
      return (
        <div className={styles.costInfo}>
          <p className={styles.totalCost}>Total Cost:</p>
          <p className={styles.dollarCost}>${Math.round(recipe.totalCost * recipe.quantity * 100) / 100}</p>
          {recipe.quantity > 1 && <p className={styles.quantity}>Qty: {recipe.quantity}</p>}
        </div>
      );
    }
  };

  return (
    <div className={styles.recipeItemContainer}>
      <Link href={`/recipes/${recipe.recipeId}`}>
        <a>
          <img
            className={styles.recipeImage}
            src={recipe.image}
            alt={recipe.title}
          />
          <div className={styles.recipeInfo}>
            <p className={styles.title}>{recipe.title}</p>
            {btnType !== '' && <p>Total cost: $ {Math.round(recipe.totalCost * recipe.quantity * 100) / 100}</p>}
          </div>
        </a>
      </Link>
      {displayButton()}
    </div>
  );
};

export default RecipeListItem;
