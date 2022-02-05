import {
  useState,
  FormEvent,
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
} from 'react';
import ShowEditPlan from '../../../components/ShowEditPlan';
import ShowSearch from '../../../components/ShowSearch';
import { useSearch, usePlan } from '../../../lib/hooks';
import containerStyles from '../../../styles/Containers.module.css';

const EditPlan = () => {
  const [querySearch, setQuerySearch] = useState('');
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const { data, searchError } = useSearch(querySearch, readyToSubmit);
  const { plan, isPlanLoading } = usePlan();

  const toggleSearch = () => {
    setDisplaySearch(!displaySearch);
  };

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

  if (searchError) return <div>Error or something, idk</div>;
  if (isPlanLoading) return <div>Loading</div>;

  return (
    <div className={containerStyles.container}>
      {!displaySearch ? (
        <ShowEditPlan toggleSearch={toggleSearch} recipes={plan.recipes} />
      ) : (
        <ShowSearch
          toggleSearch={toggleSearch}
          data={data}
          changeQuery={changeQuery}
          querySearch={querySearch}
          submitSearch={submitSearch}
        />
      )}
    </div>
  );
};

export default EditPlan;
