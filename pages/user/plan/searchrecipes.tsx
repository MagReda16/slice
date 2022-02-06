import {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  ChangeEvent,
  FormEvent,
} from 'react';
import RecipeList from '../../../components/RecipeList';
import { usePlan, useSearch } from '../../../lib/hooks';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

import styles from '../../../styles/EditPlan.module.css';
import formStyles from '../../../styles/Forms.module.css';
import buttonStyles from '../../../styles/Buttons.module.css';

const SearchRecipes = () => {
  const router = useRouter();

  const [querySearch, setQuerySearch] = useState('');
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const { data, searchError } = useSearch(querySearch, readyToSubmit);

  if (searchError) return <div>Error or something, idk</div>;

  const submitSearch: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    setReadyToSubmit(true);
  };

  const changeQuery: ChangeEventHandler = (e: ChangeEvent) => {
    const { value } = e.target as typeof e.target & {
      value: string;
    };
    setReadyToSubmit(false);
    setQuerySearch(value);
  };

  return (
    <main className={styles.container}>
      <ToastContainer />
      <button
        onClick={() => router.push('/user/plan/edit')}
        className={buttonStyles.backArrowBtn}
      >
        ⬅
      </button>
      <form className={formStyles.searchbar} onSubmit={submitSearch}>
        <input
          className={formStyles.searchInput}
          type="text"
          placeholder="search..."
          value={querySearch}
          onChange={changeQuery}
        />
      </form>
      <RecipeList btnType={'add'} recipes={data} />
    </main>
  );
};

export default SearchRecipes;
