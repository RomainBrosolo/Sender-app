import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Contributor, Donation } from '@types';
import {ThemePalette} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-donation-table',
  templateUrl: './donation-table.component.html',
  styleUrls: ['./donation-table.component.scss']
})
export class DonationTableComponent implements OnInit, OnChanges {

  @Input()
  public donations?: Donation[] | any;

  @Input()
  public contributors?: Contributor[] | any;

  @Output()
  public onDonationStatusUpdate = new EventEmitter();

  @Output()
  public onDeleteDonation = new EventEmitter();

  @Output()
  public onDonationEdit = new EventEmitter();

  public params?: string;

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

  public colorCheckbox: ThemePalette = 'primary';

  public gridData = [];
  public gridDataSave = [];
  public inputSearch: string = '';

  constructor( private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {this.inputSearch = data['id'], this.params = data['id']});
    if (this.params != undefined) {
      this.searchDonation();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gridData = this.donations.map((x: any) => ({
      donation: { ...x},
      contributor: this.contributors?.find((s: any) => s._id == x.contributor)
    }))
    this.gridDataSave = this.gridData;
    if(this.inputSearch?.length > 0) {
      this.searchDonation();
    }
  }
 
  public updateDonationStatus(element: any) {
    this.onDonationStatusUpdate.emit({id: element._id, isDelivred: !element.tracking.isDelivred, picture: element.tracking.picture, type: element.type, cost: element.cost})
  }

  public deleteDonation(id: string) {
    if (confirm('Etes vous sûr de vouloir supprimer cette donation ?')) {
      this.onDeleteDonation.emit(id);
      this.inputSearch = '';
      if (this.params != undefined) {
        this.router.navigate(['/admin']);
      }
    }
  }

  public editDonation(element: any){
    this.onDonationEdit.emit(element);
  }

  public searchDonation(){
    this.gridData = this.gridDataSave;
    if(this.inputSearch.length > 0){
      this.gridData = this.gridData.filter((item: any) => item.donation._id.includes(this.inputSearch) || item.contributor?.firstname.includes(this.inputSearch) || item.contributor?.lastname.includes(this.inputSearch) || item.donation.type.includes(this.inputSearch) || item.contributor?._id.includes(this.inputSearch));
    } 
    else {
      this.gridData = this.gridDataSave;
      if (this.params != undefined) {
        this.router.navigate(['/admin']);
      }
    }
  }

  public clearSearchBar() {
    this.router.navigate(['/admin']);
    this.inputSearch = '';
    this.searchDonation();
  }

}
