import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html'
})
export class LoginComponent {
	// Here we are implementing the submitForm function. 
	//All we are doing for right now is spitting out the details of the form to our console.
	  validateLogin(form: any): void{
	    console.log('Form Data: ');
	    console.log(form);
	  }

 }
