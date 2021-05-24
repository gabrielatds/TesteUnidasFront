import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { People } from 'src/app/models/People';
import { PeopleService } from 'src/app/services/People.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  filterForm: FormGroup;

  peopleList: People[];
  filteredPeopleList: People[];

  // FILTER - FILTER FORM
  get textFilter() {
    return this.filterForm.get('textFilter');
  }

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService
  ) {

    this.filterForm = this.fb.group({
      textFilter: [''],
    });
    this.filterByName();

    this.peopleList = new Array<People>();
    this.filteredPeopleList = new Array<People>();

  }

  ngOnInit(
  ) {
    this.peopleService.getAll().subscribe((response) => {
      this.peopleList = response.results;
      this.filteredPeopleList = response.results;
    })
  }

  filterByName() {
      this.textFilter?.valueChanges
        .subscribe((responseText: string) => {
          this.filterPeopleByName(responseText);
        });
  }

  filterPeopleByName(responseText: string) {
    if (responseText !== '') {
      this.filteredPeopleList = this.peopleList.filter(
        (people) => (people.name?.toLocaleLowerCase()
            .indexOf(responseText.toLocaleLowerCase()) !== -1)
      );
    } else {
      this.filteredPeopleList = this.peopleList;
    }
  }

  updateCurrentPeople(people: People){
    this.peopleService.updateCurrentPeople(people);
  }
}
