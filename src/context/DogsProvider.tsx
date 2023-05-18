import { createContext, useContext } from 'react';
import { useGetBreeds } from '../services/DogService';

interface IDogsDataContext {
  breeds?: string[];
}
const DogsDataContext = createContext<IDogsDataContext | null>(null);

export const DogsProvider = ({ children }: { children: JSX.Element }) => {
  const breeds = useGetBreeds().data;
  return <DogsDataContext.Provider value={{ breeds }}>
    {children}
  </DogsDataContext.Provider>;
};

export const useDogsData = () => {
  const context = useContext(DogsDataContext);
  if (!context) {
    throw new Error(`useDogsData must be used within an DogsProvider`);
  }
  return context;
};
