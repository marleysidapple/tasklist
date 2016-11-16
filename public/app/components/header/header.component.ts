import { Component, OnInit } from '@angular/core';
import { User } from './../login/user';
import  { LoginService } from '../login/login.service';
 
@Component({
	moduleId: module.id,
	selector: 'header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {

	currentUser: User;
	users: User[] = [];

	  constructor(private loginService: LoginService) {
        this.currentUser = JSON.parse(localStorage.getItem('userdata'));
    }

}