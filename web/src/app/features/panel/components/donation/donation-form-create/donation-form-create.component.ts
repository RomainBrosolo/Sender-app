import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleType, Contributor, CreateDonationInput } from '@types';
import { AmountValidator } from 'src/app/shared/directives/restricted-amount.directive';

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

  public donationForm = new FormGroup({
    contributor: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    cost: new FormControl('', [Validators.required, AmountValidator()]),
  })

  constructor() {}

  ngOnInit(): void {}

  submitDonation() {
    this.onCreate.emit(this.donationForm.value);
    console.log(this.donationForm.value)
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

  get cost(){
    return this.donationForm.get('cost');
  }
}
