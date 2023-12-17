import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Contributor, Donation } from '@types';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contributor-table',
  templateUrl: './contributor-table.component.html',
  styleUrls: ['./contributor-table.component.scss']
})
export class ContributorTableComponent implements OnInit {

  @Input()
  public donations?: Donation[] | any;

  @Input()
  public contributors?: Contributor[] | any;

  @Output()
  public onDonationStatusUpdate = new EventEmitter();

  @Output() public categorySelected = new EventEmitter();
  @Output()
  public onDeleteContributor = new EventEmitter();

  @Output()
  public onContributorEdit = new EventEmitter();


  public displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'instagram',
    'created',
    'donations',
    'actions',
  ];
  

  public gridData = [];
  public gridDataSave = [];
  public inputSearch: string = '';
  public params?: string

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gridDataSave = this.contributors;
  }

  public deleteContributor(id: string) {
    if (confirm(`Etes vous sûr de vouloir supprimer ce donateur et l'ensemble de ses dons ?`)) {
      this.onDeleteContributor.emit(id);
      this.inputSearch = '';
    }
  }

  public editContributor(element: any){
    this.onContributorEdit.emit(element);
  }

  public searchContributor(){
    this.contributors = this.gridDataSave;
    if(this.inputSearch.length > 0){
      this.contributors = this.contributors.filter((item: any) => item.firstname.includes(this.inputSearch) || item.lastname.includes(this.inputSearch) );
    } 
    else {
      this.contributors = this.gridDataSave;
    }
  }

  public viewDonations(text: string){
    this.categorySelected.emit('donations');
    this.router.navigate(['admin',text])
  }

  public getDonationsNumber(id: string){
    return this.donations.filter((data: Donation) => data.contributor === id).length;
  }

}
