import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailsComponent } from './components/peopleDetails/peopleDetails.component';

const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'people/detalhes/:name', component: PeopleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
