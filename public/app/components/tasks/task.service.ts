import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Task } from './task';
//import { User } from './user';


@Injectable()

export class TaskService {

	private url:string = 'http://localhost:3000';

	constructor (private _http: Http) { }

     
     //Fetch all existing stories
    allTask(): Observable<Task[]> {

        // ...using get request
        return this._http.get(this.url + '/api/tasks')
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

   


}