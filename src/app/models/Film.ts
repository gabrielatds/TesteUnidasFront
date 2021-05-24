import { People } from "./People";

export class Film {
    constructor(title: string, episode_id: number, opening_crawl: string, director: string, producer: string,
                release_date: Date, characters: People[], url: string, created: string, edited: string){
        
        this.title = title;
        this.episode_id = episode_id;
        this.opening_crawl = opening_crawl;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
        this.characters = characters;
        this.url = url;
        this.created = created;
        this.edited = edited;
    }

    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: People[];
    url: string;
    created: string;
    edited: string;
}