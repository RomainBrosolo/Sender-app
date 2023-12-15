import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Burkina';

  constructor(public router: Router) {}

  public showSplashScreen = true;
  public remove = true;

  ngOnInit(): void {
    document.body.scroll(0,0);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "";
      this.showSplashScreen = false;
      setTimeout(() => {
        this.remove = false;
      }, 500);
    }, 2000);
  }
}
