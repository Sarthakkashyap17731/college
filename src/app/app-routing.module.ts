import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutcollegeComponent } from './aboutcollege/aboutcollege.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ManagementComponent } from './management/management.component';
import { PrincipleComponent } from './principle/principle.component';
import { DeanComponent } from './dean/dean.component';
import { ComputerComponent } from './computer/computer.component';

const routes: Routes = [
  {
  path: 'aboutcollege', component: AboutcollegeComponent, children: [
    {path: 'principle', component: PrincipleComponent},
    {path: 'dean', component: DeanComponent},
    {path: 'computer', component: ComputerComponent}
  ]
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: 'engineer', component: EngineerComponent},
      { path: 'managment', component: ManagementComponent}
    ]
  },
  {
    path: 'header', component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
