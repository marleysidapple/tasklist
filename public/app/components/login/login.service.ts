import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
//import { User } from './user';


@Injectable()

export class LoginService {

	private url:string = 'http://localhost:3000';
    //public user:any;
    private loggedIn = false;
    public errorMessage:string;

	constructor (private _http: Http) { }

	postLogin(body: Object): Observable<any>{
		 //let bodyString = JSON.stringify(body);
         //let headers = new Headers({'Content-Type': 'application/json'});
         //let options = new RequestOptions({headers: headers});
         return this._http.post(this.url+'/auth/login', body).map(res => res.json()).map((res) => {

             if (res.state == 'success'){
                 localStorage.setItem('auth', res.user)
                 this.loggedIn = true;
                 return true;
             } else{
                 this.loggedIn = false;
                 this.errorMessage = "Invalid username/password combination";
             }

         }).catch(this.handleError);


	} 


	/* private extractData(res: Response) {     
        let body = res.json();
       // console.log(body.token);
        //localStorage.setItem('auth_token', body.token);
		//this.loggedIn = true;
        return body || {};
    }
*/

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        //console.log(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

   

    logout(){
        this.loggedIn = false;
        localStorage.removeItem('auth');
        return this._http.get(this.url + '/auth/logout');
        // remove user from local storage to log user out
    }


    isLoggedIn(){
       return false;
    }


}