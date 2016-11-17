import { Component, OnInit } from '@angular/core';
import { User } from './../login/user';
import  { LoginService } from '../login/login.service';
import { Router, RouterModule } from '@angular/router';
 
@Component({
	moduleId: module.id,
	selector: 'header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {

	currentUser: User;
	users: User[] = [];

	  constructor(private loginService: LoginService, private _router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('userdata'));
    }


    logout(){
    	this.loginService.logout();
    	this._router.navigateByUrl('login');
    	location.reload();
    }

}