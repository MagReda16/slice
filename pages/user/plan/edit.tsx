import React, { useState, FormEvent } from 'react';
import DoughnutChart from '../../../components/DoughnutChart';
import RecipeList from '../../../components/RecipeList';
import ShowEditPlan from '../../../components/ShowEditPlan';
import styles from '../../../styles/Buttons.module.css';
import { useSearch } from '../../../lib/hooks';

const EditPlan = () => {

  const [querySearch, setQuerySearch] = useState('');
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [recipeResults, setRecipeResults] = useState([]);
  const { data, error, isLoading } = useSearch(querySearch, readyToSubmit);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  }

  const submitSearch = async (e: FormEvent) => {
    e.preventDefault();
    setReadyToSubmit(true);
  }

  const handleChange = (e: any) => {
    setReadyToSubmit(false)
    e.preventDefault();
    setQuerySearch(e.target.value);
  };

  // if (isLoading) return null;

  if (error) return (
    <div>Error or something, idk</div>
  )

  return (
    <div>
      {!isSearching && <ShowEditPlan toggleSearch={toggleSearch} />}
      <form>
        <input type="text" placeholder='search...' value={querySearch} onChange={handleChange} />
        <input type="submit" name='search' onClick={submitSearch} />
      </form>
      <RecipeList recipes={data} />
    </div>
  )
}

export default EditPlan;