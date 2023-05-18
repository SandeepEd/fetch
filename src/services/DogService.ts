import { QueryObserverResult, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import client from '../utils/http';

export class DogService {
  static getBreeds(): Promise<AxiosResponse<string[]>> {
    return client.get(`/dogs/breeds`);
  }

  static search(params?: Dogs.ISearchParams, url?: string):
  Promise<AxiosResponse<Dogs.ISearchResult>> {
    if (url) {
      return client.get(url, { params });
    }
    return client.get(`/dogs/search`, { params });
  }

  static getDogs(ids: number[]): Promise<AxiosResponse<Dogs.Base[]>> {
    return client.post(`/dogs`, ids);
  }

}

export function useGetBreeds(): QueryObserverResult<string[]> {
  return useQuery({
    queryKey: `breeds`,
    queryFn: () => DogService.getBreeds().then(res => res.data)
  });
}

export function useSearch(params?: Dogs.ISearchParams): QueryObserverResult<Dogs.ISearchResult> {
  return useQuery({
    queryKey: [ `search`, params ],
    queryFn: () => DogService.search(params).then(res => res.data),
  });
}

export function useGetDogs(ids: number[]): QueryObserverResult<Dogs.Base[]> {
  return useQuery({
    queryKey: [ `dogs`, ids ],
    queryFn: () => DogService.getDogs(ids).then(res => res.data),
  });
}
