import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '@types';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public user: Partial<User> = {};
  public isConnect?: boolean;
  public loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private userService: UserService, private router: Router, private cookie: CookieService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isConnect = this.cookie.get("isConnect") == "true" ? true : false;
  }

  public submitLogin() {
    this.user = {login: this.loginForm.get('login')?.value as string, password: this.loginForm.get('password')?.value as string}
    this.userService.checkUser(this.user as User);
  }

  public logoutUser() {
    this.router.navigate(['/accueil']);
    this.cookie.delete("isConnect");
    this.isConnect = false;
  }

}
