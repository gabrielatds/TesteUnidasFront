import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { People } from '../models/People';
import { take } from 'rxjs/operators';
import { GetPeopleResponse } from '../models/GetPeopleResponse';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  private currentPeople = new BehaviorSubject<People | null>(null);
  currentPeople$ = this.currentPeople.asObservable();

  constructor(private http: HttpClient) {}

  getAll(): Observable<GetPeopleResponse> {
    return this.http
      .get<GetPeopleResponse>(`https://swapi.dev/api/people/`)
      .pipe(take(1));
  }

  getByUrl(url: string): Observable<People> {
    return this.http.get<People>(`${url}`).pipe(take(1));
  }

  updateCurrentPeople(people: People) {
    this.currentPeople.next(people);
  }
}
