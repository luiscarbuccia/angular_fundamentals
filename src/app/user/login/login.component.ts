import { Component } from "@angular/core";
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    userName
    password
    mouseoverLogin

    constructor(private authService: AuthService, private router: Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);

        this.router.navigate(['events']);
    }

    cancel(){
        this.router.navigate(['events']);
    }
}