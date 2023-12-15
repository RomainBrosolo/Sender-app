import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { loadContributors } from 'src/app/core/store/contributor/contributor.action';
import { selectAllContributors} from 'src/app/core/store/contributor/contributor.selector';
import { loadDonations } from 'src/app/core/store/donation/donation.action';
import { selectDonationById } from 'src/app/core/store/donation/donation.selector';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  public inputSearch?: string;
  public donation?:any;
  public contributors?:any;
  public contributor?: any;
  constructor(private store: Store<any>, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.store.dispatch(loadContributors()); 
  }

  searchDonation() {
    this.store.select(selectDonationById(this.inputSearch as string)).subscribe((data) => this.donation = data);
    this.store.select(selectAllContributors).subscribe((data) => this.contributors = data);
    if(this.donation == undefined) {
      if(this.inputSearch != '') {
        this.snackBar.open(`Ce don n'existe pas`, 'Fermer', {
          duration: 2000,
          panelClass: ['snackbar'],
        });
      }
    }
    else {
      this.contributor = this.contributors?.filter((s: any) => s._id == this.donation.contributor);
    }
  }

}
