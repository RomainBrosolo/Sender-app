import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DonationFormEditComponent } from './components/donation/donation-form-edit/donation-form-edit.component';
import { DonationTableComponent } from './components/donation/donation-table/donation-table.component';
import { DonationComponent } from './views/donation/donation.component';
import { ContributorFormCreateComponent } from './components/contributor/contributor-form-create/contributor-form-create.component';
import { ContributorFormEditComponent } from './components/contributor/contributor-form-edit/contributor-form-edit.component';
import { DonationFormCreateComponent } from './components/donation/donation-form-create/donation-form-create.component';
import { ContributorTableComponent } from './components/contributor/contributor-table/contributor-table.component';
import { FormLoginComponent } from './components/form-login/form-login/form-login.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DonationFormEditComponent,
    DonationTableComponent,
    DonationComponent,
    ContributorFormCreateComponent,
    DonationFormCreateComponent,
    ContributorTableComponent,
    ContributorFormEditComponent,
    FormLoginComponent,
  ],
  imports: [CommonModule, SharedModule, PanelRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CookieService]
})
export class PanelModule {}
