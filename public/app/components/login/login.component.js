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
var forms_1 = require('@angular/forms');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    // We are passing an instance of the FormBuilder to our constructor
    function LoginComponent(fb, loginService) {
        this.loginService = loginService;
        // Here we are using the FormBuilder to build out our form.
        this.userLogin = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in
            'username': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required],
        });
    }
    LoginComponent.prototype.validateLogin = function (value) {
        //call for service here and return whether login is success or not
        //console.log('Reactive Form Data: ');
        //console.log(value);
        this.loginService.postLogin(value).subscribe(function (result) {
            console.log('Result Recieved');
        }, function (err) {
            console.log('this is error');
        }, function () { });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './login.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map