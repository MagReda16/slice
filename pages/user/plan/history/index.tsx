import { useUser } from "../../../../lib/hooks";
import Spinner from "../../../../components/Spinner";
import Link from "next/link";
import NavButton from "../../../../components/NavButton";
import stylesBtn from '../../../../styles/Buttons.module.css';
import styles from '../../../../styles/History.module.css';

const index = () => {

  const { user, isUserLoading } = useUser();

  if (isUserLoading || !user) return <Spinner />

  return (
    <div className={styles.container}>
      <Link href='/user'>
        <NavButton
          className={stylesBtn.backArrowBtn}
          type='button'
          children='⬅'
        />
      </Link>
      <h1>Past Plans</h1>
      {user.previousPlans.map((plan: string) => (<Link href={`/user/plan/history/${plan}`} key={plan}>
        <a className={styles.planItem}>
          <p>Week of 1/4</p>
        </a>
      </Link>))}
    </div>
  );
};

export default index;
