import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AboutcollegeComponent,
    ContactusComponent,
    HomeComponent,
    CoursesComponent,
    HeaderComponent,
    EngineerComponent,
    ManagementComponent,
    PrincipleComponent,
    DeanComponent,
    ComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
