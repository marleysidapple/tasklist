import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { LoginService } from './login.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html',
  providers: [LoginService]
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
		  @Input() users:any;
		  loggedIn = false;
		  errorMessage: string;


		  // We are passing an instance of the FormBuilder to our constructor
		  constructor(fb: FormBuilder, private loginService: LoginService, private _router: Router){
		    // Here we are using the FormBuilder to build out our form.
		    this.userLogin = fb.group({
		      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
		      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in
		      'username' : [null, Validators.required],
		      'password': [null, Validators.required],
		    })
		  }


	 validateLogin(value: any):void{
		this.loginService.postLogin(value).subscribe(
			(result) => {
					this.users = result;
					if (this.users.state == 'success'){
						this.loggedIn = true;
						this.users = result;
						localStorage.setItem("userdata", JSON.stringify(this.users));
						this._router.navigateByUrl('task');
					} else{
						this.errorMessage = 'Invalid username/password combination';
					}

				},

				err => {
					console.log('this is an error');
				},
				() => {}
			);
			
	}


 }
