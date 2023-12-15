import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleType, Contributor, Donation, UpdateContributorInput, UpdateDonationInput } from '@types';

@Component({
  selector: 'app-contributor-form-edit',
  templateUrl: './contributor-form-edit.component.html',
  styleUrls: ['./contributor-form-edit.component.scss'],
})
export class ContributorFormEditComponent implements OnInit {
  public contributor!: Partial<UpdateContributorInput>;

  @Input() public Show?: boolean;
  @Input() public element?: Contributor;
  @Output() public isShowOutput = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.contributor = { ...this.element };
  }

  async submitContributor() {
    let updateContributor: UpdateContributorInput = {
      _id: this.contributor._id as string, 
      firstname: this.contributor.firstname,
      lastname: this.contributor.lastname,
      email: this.contributor.email,
      instagram: this.contributor.instagram, 
    }
    this.onUpdate.emit(updateContributor);
    this.toggleMenu();
  }

  toggleMenu() {
    this.Show = !this.Show;
    this.isShowOutput.emit(this.Show);
  }
}
