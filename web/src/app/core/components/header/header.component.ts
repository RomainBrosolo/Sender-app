import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isConnect?: boolean

  constructor(private cookie: CookieService) {}

  ngOnInit(): void {
    this.isConnect = this.cookie.get("isConnect") == "true" ? true : false;
  }

  public logoutUser() {
    this.cookie.delete("isConnect");
    this.isConnect = false;
  }

}
