import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.routing';

import { TasksComponent }   from './components/tasks/tasks.component';
import { LoginComponent }   from './components/login/login.component';
import { RegisterComponent }   from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginService } from './components/login/login.service';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule],
  declarations: [ AppComponent, TasksComponent, LoginComponent, RegisterComponent, HeaderComponent ],
  providers: 	[{provide: LocationStrategy, useClass: HashLocationStrategy}, LoginService],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }


