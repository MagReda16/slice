import { MouseEventHandler, ChangeEventHandler, FormEventHandler } from 'react';
import RecipeList from "./RecipeList";
import { Recipe } from "../db/types";

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
      <button onClick={toggleSearch}>Go back</button>
      <form>
        <input type="text" placeholder='search...' value={querySearch} onChange={changeQuery} />
        <input type="submit" name='search' onClick={submitSearch} />
      </form>
      <RecipeList recipes={data} />
    </>
  );
};

export default ShowSearch;
