import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleType, Donation, UpdateDonationInput } from '@types';

@Component({
  selector: 'app-donation-form-edit',
  templateUrl: './donation-form-edit.component.html',
  styleUrls: ['./donation-form-edit.component.scss'],
})
export class DonationFormEditComponent implements OnInit {
  public donation!: Partial<UpdateDonationInput>;
  public categoryEnum = ArticleType;
  public imageData?:string;

  @Input() public Show?: boolean;
  @Input() public element?: Donation;
  @Output() public isShowOutput = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.donation = { ...this.element, message: this.element?.tracking?.message };
  }

  async submitDonation() {
    let updateDonation: UpdateDonationInput = {
      id: this.element?._id as string, 
      type: this.donation.type, 
      cost: this.donation.cost, 
      isDelivred: this.element?.tracking?.isDelivred, 
      picture: this.imageData != undefined ? this.imageData : this.element?.tracking?.picture,
      message: this.donation.message,
    }
    this.onUpdate.emit(updateDonation);
    this.toggleMenu();
    this.imageData = '';

  }

  toggleMenu() {
    this.Show = !this.Show;
    this.isShowOutput.emit(this.Show);
  }

  selectImage(event:any){
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];
      if(file && allowedMimeTypes.includes(file.type)){
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        }
        reader.readAsDataURL(file);
      }
    }
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
        this.donation.cost = this.element?.cost;
    }
  }
}
