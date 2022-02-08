import Link from 'next/link'
import { useRouter } from 'next/router'
import DoughnutChart from '../../../components/DoughnutChart'
import NavButton from '../../../components/NavButton'
import RecipeList from '../../../components/RecipeList'
import { usePlan } from '../../../lib/hooks'
import Spinner from '../../../components/Spinner'
import Image from 'next/image'
import stylesBtn from '../../../styles/Buttons.module.css';
import styles from '../../../styles/EditPlan.module.css';

const ViewPlan = () => {
  const router = useRouter()
  const { plan, isPlanLoading, planError, createNewPlan } = usePlan()

  if (isPlanLoading) return <Spinner />

  if (planError) return <div>Some crazy stuff went wrong</div>

  return (
    <div className={styles.container}>
      <button onClick={() => { router.push('/user') }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <h1>This week's plan</h1>
      <DoughnutChart />
      <div className={styles.viewPlanBtnContainer}>
        <Link href="/user/plan/edit" passHref>
          <NavButton className={`${stylesBtn.btn} ${stylesBtn.small} ${stylesBtn.narrow}`} type="button" children="Edit" />
        </Link>
        <Link href="/user/shoppinglist" passHref>
          <NavButton
            className={`${stylesBtn.btn} ${stylesBtn.large} ${stylesBtn.narrow}`}
            type="button"
            children="View my Shopping List"
          />
        </Link>
      </div>
      {plan.recipes.length === 0 && <div className={styles.noRecipes}>
        <p>No recipes yet! Edit your plan to add some</p>
      </div>}
      <RecipeList recipes={plan.recipes} btnType={''} />
      {plan.recipes.length !== 0 && <button className={`${stylesBtn.btn} ${stylesBtn.large} ${stylesBtn.narrow} ${stylesBtn.secondary}`} onClick={() => createNewPlan()}>Finished with this week!</button>}
    </div >
  )
}

export default ViewPlan
