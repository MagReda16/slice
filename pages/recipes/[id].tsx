import { useEffect } from "react";
import { useRecipe } from "../../lib/hooks";
import styles from '../../styles/RecipeInfo.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import { useRouter } from 'next/router'

const RecipeDetails = () => {
  const { data, recipeError, isRecipeLoading } = useRecipe();

  const router = useRouter()

  if(isRecipeLoading) return null;

  return (
    <div className={styles.container}>
       <button onClick={() => {router.back()}} className={stylesBtn.backArrowBtn}>
        ⬅
      </button>
      <h1>{data.title}</h1>


      <img src={data.image} />


      <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>

      <h3>Ingredients</h3>
      <ul>
        {data.extendedIngredients.map((ingredient: any) => <li key={ingredient.id}>{ingredient.original}</li>)}
      </ul>

      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: data.instructions }}></div>
    </div>
  );
};

export default RecipeDetails;
