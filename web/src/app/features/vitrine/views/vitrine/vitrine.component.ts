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
      imgURI: "../../../../../assets/Darga.jpg",
      name: "Arouna Darga",
      desc: "Arouna Darga chercheur et professeur à Polytech Sorbonne."
    },
    {
      imgURI: "../../../../../assets/cathy.jpg",
      name: "Cathy Morot",
      desc: "Cathy Morot professeur en management, élue mouvement associatif de Villejuif."
    },
    {
      imgURI: "../../../../../assets/topcan.jpg",
      name: "Ozkan Topcan",
      desc: "Ozkan Topcan élève de cinquième année de l’école d’ingénieur Polytech Sorbonne."
    },
    {
      imgURI: "../../../../../assets/marylin.jpg",
      name: "Marylin Milosavljevic",
      desc: "Marylin Milosavljevic élève de cinquième année de l’école d’ingénieur Polytech Sorbonne."
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