import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './views/vitrine/vitrine.component';
import { DonationComponent } from './views/donation/donation.component'
import { ActualiteComponent } from './views/actualite/actualite.component';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  { 
    path: 'accueil', component: VitrineComponent 
  }, 
  { 
  path: 'don', component: DonationComponent 
  },
  {
    path: 'don/:id', component: DonationComponent
  },
  {
    path: 'actualites', component: ActualiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitrineRoutingModule {}
