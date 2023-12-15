import { Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import { CreateContributorInput, CreateDonationInput, Donation, Contributor, UpdateContributorInput, UpdateDonationInput } from '@types';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { addDonation, deleteDonation, loadDonations, updateDonation } from 'src/app/core/store/donation/donation.action';
import { selectAllDonations } from 'src/app/core/store/donation/donation.selector';
import { selectAllContributors } from 'src/app/core/store/contributor/contributor.selector';
import { addContributor, deleteContributor, loadContributors, updateContributor } from 'src/app/core/store/contributor/contributor.action';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  toggleDrawer = false;
  public element?: Donation;
  public elementContributor?: Contributor;
  public formSelected?: string;
  public isShow = false;
  public isShowEdit = false;
  public selectedCategorie: string = 'contributors';  

  @ViewChild('contributorCreateForm')
  public contributorCreateForm!: TemplateRef<any>;


  public displayedColumns: string[] = [
    'identification',
    'contributor',
    'type',
    'cost',
    'isDelivred',
    'created',
    'updated',
    'actions',
  ];


  public donations$ = this.store.select(selectAllDonations);
  public contributors$ = this.store.select(selectAllContributors);

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute, 
    public router: Router,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadContributors());
    this.store.dispatch(loadDonations());
  }

  closeSidenav(){
    this.isShow = false;
  }

  createContributor(contributor: CreateContributorInput) {
    this.formSelected = undefined;
    this.store.dispatch(addContributor({contributor: contributor}));
  }

  createDonation(donation: CreateDonationInput){
    this.store.dispatch(addDonation({donation: donation}));
    // this.textInputSearch ='';
  }

  updateDonation(donation: UpdateDonationInput) {
    this.store.dispatch(updateDonation({ data: donation }));
  }

  updateContributor(contributor: UpdateContributorInput) {
    this.store.dispatch(updateContributor({ data: contributor }));
  }

  deleteDonation(id: string) {
    this.store.dispatch(deleteDonation({ id: id }));
  }

  deleteContributor(id: string) {
    this.store.dispatch(deleteContributor({ id: id }));
  }

  toggleFormCreateContributor() {
    this.isShow = !this.isShow;
    this.formSelected = 'CreateContributor'
  }

  toggleFormCreateDonation() {
    this.isShow = !this.isShow;
    this.formSelected = 'CreateDonation'
  }

  toggleMenuEdit(element: Donation) {
    this.formSelected = 'EditDonation'
    this.isShowEdit = !this.isShowEdit;
    this.element = element;
  }

  toggleMenuEditContributor(element: Contributor) {
    this.formSelected = 'EditContributor'
    this.isShowEdit = !this.isShowEdit;
    this.elementContributor = element;
  }

  updateStatus(element:any) {
    this.store.dispatch(updateDonation({data:element }));
  }

  logoutUser() {
    this.router.navigate(['/accueil']);
    this.cookie.delete("isConnect");
  }

  goToHomePage() {
    this.router.navigate(['/accueil']);
  }

}
