import { QueryObserverResult, useQuery } from "react-query";
import client from "../utils/http";

export class DogService {
    static getBreeds() {
        return client.get('/dogs/breeds')
    }

    static search() {
        return client.get('/dogs/search')
    }

    static getDogs(ids: number[]) {
        return client.post('/dogs', ids)
    }


}

export function useGetBreeds(): QueryObserverResult<Dogs.Base> {
    return useQuery({
        queryKey: 'breeds',
        queryFn: () => DogService.getBreeds().then(res => res.data)
    })
}

export function useSearch(): QueryObserverResult<Dogs.ISearch> {
    return useQuery({
        queryKey: 'search',
        queryFn: () => DogService.search().then(res => res.data),
    })
}

export function useGetDogs(ids: number[]): QueryObserverResult<Dogs.Base[]> {
    return useQuery({
        queryKey: ['dogs'],
        queryFn: () => DogService.getDogs(ids).then(res => res.data)
    })
}