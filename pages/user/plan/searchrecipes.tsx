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
import Spinner from '../../../components/Spinner';
import Image from 'next/image';
import styles from '../../../styles/EditPlan.module.css';
import formStyles from '../../../styles/Forms.module.css';
import buttonStyles from '../../../styles/Buttons.module.css';

const SearchRecipes = () => {
  const router = useRouter();

  const ISSERVER = typeof window === "undefined";
  let searchResults: string | null;
  if (!ISSERVER) searchResults = localStorage.getItem('searchdata');
  else return null;
  if (searchResults) searchResults = JSON.parse(searchResults);

  const [querySearch, setQuerySearch] = useState('');
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const { data, searchError, isSearchLoading } = useSearch(querySearch, readyToSubmit, searchResults);
  if (searchError) return <div>Error or something, idk</div>;
  // if (isSearchLoading) return <Spinner/>

  if (data !== null) localStorage.setItem('searchdata', JSON.stringify(data));

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

  const displayList = () => {
    if (!data) return <p>searching</p>;
    else return <RecipeList btnType={'add'} recipes={data} />
  }

  return (
    <main className={styles.container}>
      <ToastContainer />
      <button
        onClick={() => router.push('/user/plan/edit')}
        className={buttonStyles.backArrowBtn}
      >
        <Image src='/back_arrow.svg' alt='Back button' width={45} height={45}/>
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
      {displayList()}
    </main>
  );
};

export default SearchRecipes;
