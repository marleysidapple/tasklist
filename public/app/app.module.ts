import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.routing';

import { TasksComponent }   from './components/tasks/tasks.component';
import { LoginComponent }   from './components/login/login.component';
import { RegisterComponent }   from './components/register/register.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, TasksComponent, LoginComponent, RegisterComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }


