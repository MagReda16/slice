import { MouseEventHandler, ChangeEventHandler, FormEventHandler } from 'react';
import RecipeList from "./RecipeList";
import { Recipe } from "../db/types";
import NavButton from './NavButton';
import Link from 'next/link';

import stylesBtn from '../styles/Buttons.module.css';
import stylesForm from '../styles/Forms.module.css';
import backArrow from '../assets/back-arrow-navigation-svgrepo-com.svg';


type ShowSearchProps = {
  toggleSearch: MouseEventHandler,
  data: Recipe[],
  changeQuery: ChangeEventHandler,
  querySearch: string,
  submitSearch: FormEventHandler
}

const ShowSearch = ({ toggleSearch, data, changeQuery, querySearch, submitSearch }: ShowSearchProps) => {
  return (
    <>
      <button onClick={toggleSearch} className={stylesBtn.backArrowBtn}>
        ⬅
      </button>

      <form className={stylesForm.searchbar} onSubmit={submitSearch}>
        <input className={stylesForm.searchInput} type="text" placeholder='search...' value={querySearch} onChange={changeQuery} />
      </form>
      <RecipeList btnType={'add'} recipes={data}/>
    </>
  );
};

export default ShowSearch;
