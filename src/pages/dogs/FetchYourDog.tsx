import { useSearch } from '../../services/DogService'
import { useDebounce } from '@react-hook/debounce';
import DogSearch from './Search';
import List from './List';

function FetchYourDog() {
    const [query, searchQuery] = useDebounce<string>("", 500)
    const queryResult = useSearch()

    const { error, status, data: results } = queryResult || {};

    console.log(`queryResult :::`, queryResult, results)

    if (error || status === 'error') {
        throw new Error('Error Occurred While Searching for Dogs, Please Try again later!')
    }

    return (
        <>
            <DogSearch
                query={query}
                handleSearch={searchQuery}
            />
            {
                status === 'loading' ? <div>Loading...</div> :
                    results?.resultIds ? <List query={results?.resultIds} /> : <div>no data</div>
            }
        </>
    )
}

export default FetchYourDog