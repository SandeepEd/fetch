import { useSearch } from '../../services/DogService'
import List from './List';
import FilterComponent from './Filter';
import { useDogsData } from '../../context/DogsProvider';
import { useState } from 'react';

function FetchYourDog() {
    const [filter, setFilter] = useState<Dogs.ISearchParams>({})
    const { breeds } = useDogsData()
    const queryResult = useSearch({
        ...filter,
        size: 10,
    })

    const handleFilterChange = (newFilter: Dogs.ISearchParams) => {
        console.log(`newFilter :::`, newFilter)
        setFilter((prevFil) => ({ ...prevFil, ...newFilter }))
    }

    const { error, status, data: results, isLoading } = queryResult || {};

    // console.log(`queryResult :::`, queryResult, results)

    if (error || status === 'error') {
        throw new Error('Error Occurred While Searching for Dogs, Please Try again later!')
    }

    return (
        <>
            <FilterComponent
                filter={filter}
                breeds={breeds}
                handleFilter={handleFilterChange}
            />
            {
                (status === 'loading' || isLoading) ? <div>Loading...</div> :
                    results?.resultIds ?
                        <List query={results?.resultIds} /> : <div>no data</div>
            }
        </>
    )
}

export default FetchYourDog