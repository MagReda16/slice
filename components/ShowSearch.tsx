import { MouseEventHandler, ChangeEventHandler, FormEventHandler } from 'react';
import RecipeList from './RecipeList';
import { Recipe } from '../db/types';
import styles from '../styles/EditPlan.module.css';
import stylesBtn from '../styles/Buttons.module.css';
import stylesForm from '../styles/Forms.module.css';

type ShowSearchProps = {
  toggleSearch: MouseEventHandler;
  data: Recipe[];
  changeQuery: ChangeEventHandler;
  querySearch: string;
  submitSearch: FormEventHandler;
};

const ShowSearch = ({
  toggleSearch,
  data,
  changeQuery,
  querySearch,
  submitSearch,
}: ShowSearchProps) => {
  return (
    <main>
      <div className={styles.searchBarContainer}>
        <button onClick={toggleSearch} className={stylesBtn.backArrowBtn}>
          ⬅
        </button>
        <form className={stylesForm.searchbar} onSubmit={submitSearch}>
          <input
            className={stylesForm.searchInput}
            type="text"
            placeholder="search..."
            value={querySearch}
            onChange={changeQuery}
          />
        </form>
      </div>
      <RecipeList btnType={'add'} recipes={data} />
    </main>
  );
};

export default ShowSearch;
