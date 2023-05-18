import React from 'react';
import { useGetDogs } from '../../services/DogService';

interface IListProps {
  query: number[];
}

const List: React.FC<IListProps> = ({ query }) => {

  const queryResult = useGetDogs(query);

  const { error, status, data: results, isLoading } = queryResult || {};

  if (status === `loading` || isLoading) {
    return <div>Loading...</div>;
  }

  if (status === `error`) {
    console.log(`error :::`, error);
    return <div>Error Occurred</div>;
  }

  return <>
    <div className='grid grid-cols-5 mt-2 p-4 gap-4 w-screen'>
      {results?.map((dog: Dogs.Base) =>
        <Card key={dog.id} dog={dog} />)}
    </div>
  </>;
};

const Card = ({ dog }: { dog: Dogs.Base }) =>
  <div className='flex flex-col h-60 border-gray-300 duration-500 hover:-translate-y-4 hover:border-4 hover:border-gray-700 hover:rounded-md hover:p-2'>
    <img
      className='h-40 max-w-full object-cover rounded-t-lg'
      src={dog.img}
      alt={dog.name} />
    <p className='text-left mt-1 font-medium'>Name: {dog.name}({dog.age})</p>
    <p className='text-left text-xs'>Breed: {dog.breed}</p>
    <p className='text-left text-xs'>ZipCode: {dog.zip_code}</p>
  </div>;

export default List;
