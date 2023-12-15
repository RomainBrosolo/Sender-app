import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleType, Contributor, CreateDonationInput } from '@types';

@Component({
  selector: 'app-donation-form-create',
  templateUrl: './donation-form-create.component.html',
  styleUrls: ['./donation-form-create.component.scss']
})
export class DonationFormCreateComponent implements OnInit {

  @Input() public Show: any;
  @Output() public isShowOutput = new EventEmitter();
  @Output() onCreate = new EventEmitter();

  @Input()
  public contributors?: Contributor[] | any;

  public donation: Partial<CreateDonationInput> = {};
  public articleEnum = ArticleType;

  constructor() {}

  ngOnInit(): void {}

  submitDonation() {
    this.onCreate.emit(this.donation);
    this.toggleMenu();
    this.donation = {};
  }

  toggleMenu() {
    this.Show = !this.Show;
    this.isShowOutput.emit(this.Show);
  }

  changeCostInput(event:any){
    switch(event.value){
      case 'alimentationPack':
        this.donation.cost = 25;
        break;
      case 'educationPack':
        this.donation.cost = 20;
        break;
      default:
        this.donation.cost = undefined;
    }
  }
}
