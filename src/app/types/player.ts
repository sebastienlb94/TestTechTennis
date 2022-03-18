type Title = {
    year: number;
    rank: number;
    competitions: string[];
}

export type Player = {
    id: number;
    firstname: string;
    lastname: string;
    shortname : string;
    sex: string;
    country: {
        picture : string;
        code : string;
    }
    picture: string;
    data: {
        rank: number;
        points: number;
        weight: number;
        height: number;
        age: number;
        last: number[]
    }
    titles: Title[]
}
