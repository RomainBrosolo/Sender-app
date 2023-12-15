import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetUserDocument, User } from '@types';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private responseData?:boolean;

  constructor(private apollo: Apollo, private cookie: CookieService, private router: Router, private snackBar: MatSnackBar) {}

  async checkUser(user: User) {

    const response: any = await this.apollo.mutate({
      mutation: GetUserDocument,
      variables: {
        user: user,
      },
    }).toPromise();

    this.responseData = response.data.check_user;

    if (this.responseData === true) {
      this.cookie.set("isConnect","true");
      this.router.navigate(['/admin']);
      this.snackBar.open(`Bienvenue dans le panel administrateur`, 'Fermer', {
        duration: 3000,
        panelClass: ['snackbar'],
      });
    }
    else {
      this.cookie.set("isConnect","false");
      this.snackBar.open(`Mauvais identifiant et/ou password`, 'Fermer', {
        duration: 2000,
        panelClass: ['snackbar'],
      });
    }
  }
}
