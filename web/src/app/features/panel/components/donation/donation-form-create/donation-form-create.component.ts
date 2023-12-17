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
    this.donationForm.reset();
    this.toggleMenu();
  }

  toggleMenu() {
    this.Show = !this.Show;
    this.isShowOutput.emit(this.Show);
  }

  changeCostInput(event:any){
    switch(event.value){
      case 'alimentationPack':
        this.donationForm.controls['cost'].setValue('25');
        break;
      case 'educationPack':
        this.donationForm.controls['cost'].setValue('20');
        break;
      default:
        this.donationForm.controls['cost'].setValue('0');
    }
  }

  get cost(){
    return this.donationForm.get('cost');
  }
}
