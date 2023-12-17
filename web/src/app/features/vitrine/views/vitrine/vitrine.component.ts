import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { DialogHelloAssoComponent } from 'src/app/shared/components/dialog-hello-asso/dialog-hello-asso.component';
import { DialogTaxationComponent } from 'src/app/shared/components/dialog-taxation/dialog-taxation.component';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss']
})
export class VitrineComponent implements OnInit {

  public team = [
    {
      imgURI: "../../../../../assets/romain.jpeg",
      name: "Romain BROSOLO",
      desc: "Dev Fullstack - CEO Sender"
    },
    {
      imgURI: "../../../../../assets/younes.jpeg",
      name: "Younes BAALI",
      desc: "Dev Fullstack - CTO Sender"
    },
    {
      imgURI: "../../../../../assets/johan.jpeg",
      name: "Johan MARIN",
      desc: "Dev Fullstack - COO Sender"
    },
    
  ];

  public partners = [];


  constructor(public dialog: MatDialog, private cookie: CookieService) { }

  openDialog() {
    this.dialog.open(DialogHelloAssoComponent);
  }

  openDialogTaxation() {
    if (!this.cookie.get("popin")) {
      this.dialog.open(DialogTaxationComponent);
      this.cookie.set("popin", "load");
    }
    
  }

  ngOnInit(): void {
    this.openDialogTaxation();
  }
}