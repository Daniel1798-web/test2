

    

    export interface Info {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface Episode {
        id: number;
        name: string;
        air_date: string;
        episode: string;
        characters: string[];
        url: string;
        created: Date;
    }

    export interface EpisodeSearch {
        info: Info;
        results: Episode[];
    }


    export interface Character {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

    export interface characterSearch {
        info: Info;
        results: Character[];
    }




    export interface Origin {
        name: string;
        url: string;
    }

    export interface Location {
        name: string;
        url: string;
    }

    export interface RootObject {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: Origin;
        location: Location;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }
