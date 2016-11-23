import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent implements OnInit { 


	tasks: Task[];



	ngOnInit(){
		this.getAllTask();
	}



	constructor(private taskService: TaskService) {}


	getAllTask() {
		// Get all comments
         this.taskService.allTask()
                           .subscribe(
                               tasks => this.tasks = tasks, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
	}

}
