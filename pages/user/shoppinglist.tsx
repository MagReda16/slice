import Image from 'next/image';
import { useRouter } from 'next/router';
import ShoppingList from '../../components/ShoppingList';
import { useShoppingList } from '../../lib/hooks/';
import { usePlan } from '../../lib/hooks';
import stylesBtn from '../../styles/Buttons.module.css';
import styles from '../../styles/ShoppingList.module.css';
import Spinner from '../../components/Spinner';


const ViewShoppingList = () => {
  const router = useRouter();
  const { plan, isPlanLoading } = usePlan();
  const { data, error, isLoading } = useShoppingList(plan);

  if (isPlanLoading) return <Spinner />

  if (data.length === 0 && plan.recipes.length !== 0) return <Spinner />

  const displayIngredients = () => {
    if (data.length === 0) {
      return <p className={styles.noRecipes}>Add recipes to see a list of ingredients</p>
    } else {
      return <ShoppingList data={data} />
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => { router.push('/user/plan') }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <h1>Shopping List</h1>
      {displayIngredients()}
    </div>
  )
}

export default ViewShoppingList;