"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Rx_1 = require('rxjs/Rx');
//import { User } from './user';
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3000';
        //public user:any;
        this.loggedIn = false;
    }
    LoginService.prototype.postLogin = function (body) {
        var _this = this;
        //let bodyString = JSON.stringify(body);
        //let headers = new Headers({'Content-Type': 'application/json'});
        //let options = new RequestOptions({headers: headers});
        return this._http.post(this.url + '/auth/login', body).map(function (res) { return res.json(); }).map(function (res) {
            if (res.state == 'success') {
                localStorage.setItem('auth', res.user);
                _this.loggedIn = true;
                return true;
            }
            else {
                _this.loggedIn = false;
                _this.errorMessage = "Invalid username/password combination";
            }
        }).catch(this.handleError);
    };
    /* private extractData(res: Response) {
        let body = res.json();
       // console.log(body.token);
        //localStorage.setItem('auth_token', body.token);
        //this.loggedIn = true;
        return body || {};
    }
*/
    LoginService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        //console.log(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    LoginService.prototype.logout = function () {
        this.loggedIn = false;
        localStorage.removeItem('auth');
        return this._http.get(this.url + '/auth/logout');
        // remove user from local storage to log user out
    };
    LoginService.prototype.isLoggedIn = function () {
        return false;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map