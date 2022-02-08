import { useRecipe } from "../../lib/hooks";
import styles from '../../styles/RecipeInfo.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import { useRouter } from 'next/router'
import Spinner from "../../components/Spinner";
import Image from "next/image";

const RecipeDetails = () => {
  const { data, recipeError, isRecipeLoading } = useRecipe();

  const router = useRouter()

  if (isRecipeLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <button onClick={() => { router.back() }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <h1 className={styles.title}>{data.title}</h1>
      <img className={styles.recipeImg} src={data.image} />
      <div className={styles.recipeInfoContainer}>
        <div className={styles.infoContainer}>
          <h3 className={styles.header}>Summary</h3>
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
        </div>

        <div className={styles.infoContainer}>
          <h3 className={styles.header}>Ingredients</h3>
          <ul>
            {data.extendedIngredients.map((ingredient: any) => <li key={ingredient.id}>{ingredient.original}</li>)}
          </ul>
        </div>

        <div className={styles.infoContainer}>
          <h3 className={styles.header}>Instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: data.instructions }}></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
