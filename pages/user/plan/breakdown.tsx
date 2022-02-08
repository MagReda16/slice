import DoughnutChart from "../../../components/DoughnutChart"
import NavButton from '../../../components/NavButton';
import Link from 'next/link';
import BarChart from "../../../components/BarChart";
import { usePlan } from "../../../lib/hooks";
import styles from '../../../styles/Breakdown.module.css'
import stylesBtn from '../../../styles/Buttons.module.css';

const Breakdown = () => {

  return (
    <div className={styles.container}>
       <Link href="/user">
        <NavButton
          className={stylesBtn.backArrowBtn}
          type="button"
          children="⬅"
        />
      </Link>
      <h1>Weekly Breakdown</h1>
      <div>
      <BarChart/>
      </div>

    </div>
  )

}

export default Breakdown;