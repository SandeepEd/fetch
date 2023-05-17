declare namespace Dogs {
    interface Base {
        id: string
        img: string
        name: string
        age: number
        zip_code: string
        breed: string
    }

    interface ISearch {
        resultIds: number[],
        total: number,
        next: string | null,
        previous: string | null
    }
}