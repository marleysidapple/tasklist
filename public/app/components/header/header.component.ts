import { Component, OnInit } from '@angular/core';
import { User } from './../login/user';
import  { LoginService } from '../login/login.service';
import { Router, RouterModule } from '@angular/router';
 
@Component({
	moduleId: module.id,
	selector: 'header',
	templateUrl: './header.component.html',
})

export class HeaderComponent {

      public isAuth = false;

	  constructor(private loginService: LoginService, private _router: Router) {

      }



    logout(){
        this.loginService.logout().subscribe(
            (result) => {
                    console.log('user loggedout successfully');
                }
            );    
    }


 
}