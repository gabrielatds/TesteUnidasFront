import { People } from "./People";

export class GetPeopleResponse {
    constructor(results: People[]) {
        this.results = results;
    }

    results: People[];
}
