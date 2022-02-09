import Link from 'next/link';
import { useState } from 'react';
import { Recipe } from '../lib/types'
import { usePlan } from '../lib/hooks/usePlan';
import Image from 'next/image';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/RecipeList.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import { useUser } from '../lib/hooks/useUser';

type RecipeListProps = {
  recipe: Recipe;
  btnType: string;
  index: number;
};

const RecipeListItem = ({ recipe, btnType, index }: RecipeListProps) => {
  const { addRecipeToPlan, decrementRecipeQuantity, incrementRecipeQuantity, plan } =
    usePlan();

  const initialState = <Image src='/plus.svg' alt='Add button' width={25} height={25}/>
  const [addBtnText, setAddBtnText] = useState(initialState)
  const changeBtnText = (text: any) => {
    setAddBtnText(text);
    setTimeout(()=> setAddBtnText(initialState), 900);
  }

  const { user } = useUser();

  const displayButton = () => {
    if (btnType === 'add') {
      return (
        <button
          className={styles.addRecipeBtn}
          type="button"
          onClick={() => {
            addRecipeToPlan(recipe);
            changeBtnText(<Image src='/check.svg' alt='Check' width={25} height={25}/>)
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
          {addBtnText}
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
              if (plan.totalPlanCost + recipe.totalCost > user.budget) {
                toast.warning('STOP! YOU ARE POOR! 🥲 😭', {
                  position: 'top-center',
                  theme: 'light',
                  autoClose: 600,
                  draggable: false,
                  hideProgressBar: true,
                  closeOnClick: true,
                  progress: undefined,
                  transition: Slide
                })
            }}
          }
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
            <p className={styles.servings}>Servings: {recipe.servings * recipe.quantity}</p>
            {btnType !== '' && <p>Total cost: $ {Math.round(recipe.totalCost * recipe.quantity * 100) / 100}</p>}
          </div>
        </a>
      </Link>
      {displayButton()}
    </div>
  );
};

export default RecipeListItem;
