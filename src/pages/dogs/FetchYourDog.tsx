import { useState } from 'react';
import { useSearch } from '../../services/DogService';
import { useDogsData } from '../../context/DogsProvider';
import List from './List';
import FilterComponent from './Filter';
import Pagination from './Pagination';

function FetchYourDog() {
  const [ filter, setFilter ] = useState<Dogs.ISearchParams>({});
  const { breeds } = useDogsData();
  const queryResult = useSearch({
    ...filter,
    size: 10,
  });

  const handleFilterChange = (newFilter: Dogs.ISearchParams) => {
    setFilter((prevFil) => ({ ...prevFil, ...newFilter }));
  };

  const { error, status, data: results, isLoading } = queryResult || {};

  if (error || status === `error`) {
    throw new Error(`Error Occurred While Searching for Dogs, Please Try again later!`);
  }

  // useEffect(() => {
  //     handleFilterChange({ from: 0 })
  // }, [results?.total])

  return (
    <>
      <FilterComponent
        filter={filter}
        breeds={breeds}
        handleFilter={handleFilterChange}
      />
      {
        status === `loading` || isLoading ? <div>Loading...</div> :
          results?.resultIds ?
            <List query={results?.resultIds} /> : <div>no data</div>
      }
      {status === `loading` || isLoading ? <div>Loading...</div> :
      <Pagination
          currentPage={filter.from ? filter.from / 10 : 0}
          totalCount={results?.total || 0}
          handlePageChange={handleFilterChange}
        />
      }
    </>
  );
}

export default FetchYourDog;
