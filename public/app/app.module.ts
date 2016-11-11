import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TasksComponent }   from './components/tasks/tasks.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule ],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
