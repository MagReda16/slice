import { MouseEventHandler, ChangeEventHandler, FormEventHandler } from 'react';
import RecipeList from "./RecipeList";
import { Recipe } from "../db/types";

import stylesForm from '../styles/Forms.module.css';

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
      <form className={stylesForm.searchbar}>
        <button onClick={toggleSearch}>Go back</button>
        <input className={stylesForm.searchInput} type="text" placeholder='search...' value={querySearch} onChange={changeQuery} />
        <input type="submit" name='search' onClick={submitSearch} />
      </form>
      <RecipeList btnType={'add'} recipes={data} />
    </>
  );
};

export default ShowSearch;
