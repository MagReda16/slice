import Image from 'next/image';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import { logout } from '../../lib/methods';
import styles from '../../styles/Settings.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import {useRouter} from 'next/router';

const Settings = () => {

  const router = useRouter();

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
        </header>
        <CreateBudgetForm />
        <button className={`${stylesBtn.btn} ${stylesBtn.secondary} ${stylesBtn.small}`} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Settings;