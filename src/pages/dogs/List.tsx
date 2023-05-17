import React from 'react'
import { useGetDogs } from '../../services/DogService';

interface IListProps {
    query: number[];
}

const List: React.FC<IListProps> = ({ query }) => {

    const queryResult = useGetDogs(query);

    const { error, status, data: results } = queryResult || {};

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'error') {
        console.log(`error :::`, error)
        return <div>Error Occurred</div>
    }

    return <>
        <div className='grid grid-cols-5 mt-2 p-4 gap-4 w-screen'>
            {results?.map((dog: Dogs.Base) => (
                <div className='flex flex-col border-2 rounded-lg border-gray-300' key={dog.id}>
                    <img
                        className='h-40 min-w-full object-cover rounded-t-lg'
                        src={dog.img}
                        alt={dog.name} />
                    <p className='text-left my-1 pl-2 font-medium'>{dog.name}</p>
                </div>
            ))}
        </div>
    </>
}

export default List