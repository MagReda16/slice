import { useRecipe, usePlan } from "../../lib/hooks";
import { useRouter } from 'next/router'
import Image from "next/image";
import Spinner from "../../components/Spinner";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from '../../styles/RecipeInfo.module.css';
import stylesBtn from '../../styles/Buttons.module.css';

const RecipeDetails = () => {
  const { data, recipeError, isRecipeLoading } = useRecipe();
  const { addRecipeToPlan } = usePlan()
  const router = useRouter()

  if (isRecipeLoading) return <Spinner />;

  if (!data.image) data.image = `https://spoonacular.com/recipeImages/${data.id}-556x370.jpg`

  const handleClick = () => {
    const nutrients = ['Calories', 'Fat', 'Carbohydrates', 'Protein']
    const recipe = {
      recipeId: data.id,
      title: data.title,
      image: `https://spoonacular.com/recipeImages/${data.id}-312x231.jpg`,
      totalCost: Math.round(data.servings * data.pricePerServing) / 100,
      quantity: 1,
      nutrients: data.nutrition.nutrients.filter((nutrient: any) => nutrients.includes(nutrient.name)),
      servings: data.servings,
    }
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
    addRecipeToPlan(recipe);
  }
  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <button onClick={() => { router.back() }} className={stylesBtn.backArrowBtn}>
          <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
        </button>
        <h1 className={styles.title}>{data.title}</h1>
        <button className={stylesBtn.addButton} onClick={handleClick}>
          <Image src='/add-btn.svg' alt='Add button' width={45} height={45} />
        </button>
        <img className={styles.recipeImg} src={data.image} />
        <div className={styles.recipeInfoContainer}>
          <div className={styles.infoContainer}>
            <h3 className={styles.header}>Summary</h3>
            <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
          </div>

          <div className={styles.infoContainer}>
            <h3 className={styles.header}>Ingredients</h3>
            <ul>
              {data.extendedIngredients.map((ingredient: any, index: number) => <li key={index}>{ingredient.original}</li>)}
            </ul>
          </div>

          <div className={styles.infoContainer}>
            <h3 className={styles.header}>Instructions</h3>
            <div dangerouslySetInnerHTML={{ __html: data.instructions }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
