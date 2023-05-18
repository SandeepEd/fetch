declare namespace Dogs {
    interface Base {
        id: string
        img: string
        name: string
        age: number
        zip_code: string
        breed: string
    }

    interface ISearchResult {
        resultIds: number[],
        total: number,
        next: string | null,
        previous: string | null
    }

    interface ISearchParams {
        breeds?: string[],
        zipCodes?: number[],
        ageMin?: number,
        ageMax?: number,
        size?: number,
        from?: number,
        sort?: string,
        size?: number,
    }
}