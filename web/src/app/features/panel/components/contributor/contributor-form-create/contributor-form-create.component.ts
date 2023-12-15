import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { Contributor, CreateContributorInput } from '@types';

@Component({
  selector: 'app-contributor-form-create',
  templateUrl: './contributor-form-create.component.html',
  styleUrls: ['./contributor-form-create.component.scss']
})
export class ContributorFormCreateComponent implements OnInit {

  @Input() public Show: any;
  @Output() public isShowOutput = new EventEmitter();
  @Output() onCreate = new EventEmitter();

  contributor: Partial<CreateContributorInput> = {};

  constructor() {}

  ngOnInit(): void {}

  submitContributor() {
    this.onCreate.emit(this.contributor);
    this.toggleMenu();
  }

  toggleMenu() {
    this.Show = !this.Show;
    this.isShowOutput.emit(this.Show);
  }

}
