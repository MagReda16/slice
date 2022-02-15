import Image from 'next/image';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import { logout } from '../../lib/methods';
import { useUser } from '../../lib/hooks';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import {useRouter} from 'next/router';
import Spinner from '../../components/Spinner';


const Settings = () => {

  const router = useRouter();
  const { user, isUserLoading } = useUser();

  if (isUserLoading && !user) return <Spinner />
  


  const handleLogout = () => {
    logout();
    router.push('/api/auth/logout');
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={() => { router.push('/user') }} className={stylesBtn.backArrowBtn}>
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45} />
      </button>
      <div className={styles.container}>
        <header className={styles.updateSettingsHeader}>
          <h1>Weekly Budget</h1>
          <h6>Your current budget: <span>${user.budget}</span></h6>
        </header>
        <CreateBudgetForm />
        <button className={`${stylesBtn.btn} ${stylesBtn.secondary} ${stylesBtn.small}`} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Settings;