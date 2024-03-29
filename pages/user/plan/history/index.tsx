import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '../../../../lib/hooks';
import { Plan } from '../../../../lib/types';
import Spinner from '../../../../components/Spinner';
import NavButton from '../../../../components/NavButton';
import stylesBtn from '../../../../styles/Buttons.module.css';
import styles from '../../../../styles/History.module.css';

const index = () => {

  const router = useRouter();

  const { user, isUserLoading } = useUser();

  if (isUserLoading || !user) return <Spinner />

  return (
    <div className={styles.container}>
      <button onClick={() => { router.push('/user') }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <h1>Past Plans</h1>
      {user.previousPlans.map((plan: Plan) => (<Link href={`/user/plan/history/${plan._id}`} key={plan._id}>
        <a className={styles.planItem}>
          <p>Week of {moment(plan.createdAt).format('MMM Do')}</p>
        </a>
      </Link>))}
      {user.previousPlans.length === 0 && <div className={styles.noPlans}>
        <p>No previous plans</p>
      </div>}
    </div>
  );
};

export default index;
