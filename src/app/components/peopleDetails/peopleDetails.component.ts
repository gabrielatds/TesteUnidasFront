import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/People';
import { PeopleService } from 'src/app/services/People.service';

@Component({
  selector: 'app-peopleDetails',
  templateUrl: './peopleDetails.component.html',
  styleUrls: ['./peopleDetails.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  currentPeople = new People();

  constructor(private peopleService: PeopleService) { 
    this.peopleService.currentPeople$.subscribe(response => {
      if(response != null){
        this.currentPeople = response;
      }
    })
  }

  ngOnInit() {
  }


}
