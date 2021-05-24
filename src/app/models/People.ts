import { Film } from "./Film";

export class People {

    constructor();
    
    constructor(name?: string, birth_year?: string, eye_color?: string, gender?: string, hair_color?: string,
                height?: string, mass?: string, skin_color?: string, homeworld?: string, url?: string,
                created?: string, edited?: string, films?: Film[]) {
        this.name = name;
        this.birth_year = birth_year;
        this.eye_color = eye_color;
        this.gender = gender;
        this.hair_color = hair_color;
        this.height = height;
        this.mass = mass;
        this.skin_color = skin_color;
        this.homeworld = homeworld;
        this.url = url;
        this.created = created;
        this.edited = edited;
        this.films = films;
    }

    name?: string;
    birth_year?: string;
    eye_color?: string;
    gender?: string;
    hair_color?: string;
    height?: string;
    mass?: string;
    skin_color?:string;
    homeworld?: string;
    films?: Film[];
    url?: string
    created?: string;
    edited?: string;
}
