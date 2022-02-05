import React from 'react';
import CreateBudgetForm from '../../components/CreateBudgetForm';
import styles from '../../styles/Containers.module.css';
import stylesFont from '../../styles/Fonts.module.css';
import stylesBtn from '../../styles/Buttons.module.css';
import Link from 'next/link';
import NavButton from '../../components/NavButton';

const Settings = () => {



  return (
    <div className={styles.container}>
      <div>
        <Link href='/user'>
          <NavButton
          className={stylesBtn.backArrowBtn}
          type='button'
          children='⬅'
        />
        </Link>
        <h1 className={stylesFont.budgetText1}>Weekly Budget</h1>
      </div>
      <CreateBudgetForm/>



      <button className={`${stylesBtn.Btn} ${stylesBtn.logoutBtn}`}>Logout</button>
    </div>
  )
}

export default Settings;