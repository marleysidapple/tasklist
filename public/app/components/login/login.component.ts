import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { LoginService } from './login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html',
})
export class LoginComponent {


	/*
	* template driven approach
	*/
	  // validateLogin(form: any): void{
	  //   console.log('Form Data: ');
	  //   console.log(form);
	  // }


	  /*
	  * model driven approach
	  */

	    // The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
		  userLogin : FormGroup;
		  err: string;


		  // We are passing an instance of the FormBuilder to our constructor
		  constructor(fb: FormBuilder, private loginService: LoginService, private _router: Router){
		    // Here we are using the FormBuilder to build out our form.
		    this.userLogin = fb.group({
		      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
		      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in
		      'username' : [null, Validators.required],
		      'password': [null, Validators.required],
		    })

		    //if user is already logged in, then we are routing that user back to task   
		   /* if(this.users != ""){
		    	this._router.navigateByUrl('task');
		    }*/
		  }


	 validateLogin(value: any):void{
		this.loginService.postLogin(value).subscribe(
			(result) => {
					if (result){
						this._router.navigateByUrl('task');
					} else {
						this.err = this.loginService.errorMessage;
					}
					/*if (this.loginService.isLoggedIn){
						this._router.navigateByUrl('task');
					} else {
						this.err = this.loginService.errorMessage;
					}*/

				},

				err => {
					console.log('this is an error');
				},
				() => {}
			);
			
	}
	


 }
