import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './views/donation/donation.component';

const routes: Routes = [
  { path: '', component: DonationComponent }, 
  { path: ':id', component: DonationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
