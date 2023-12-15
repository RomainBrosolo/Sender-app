import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrineRoutingModule } from './vitrine-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VitrineComponent } from './views/vitrine/vitrine.component';
import { DonationComponent } from './views/donation/donation.component';
import { ActualiteComponent } from './views/actualite/actualite.component';
import { CardVitrineComponent } from './components/card-vitrine/card-vitrine.component';


@NgModule({
  declarations: [
    VitrineComponent,
    DonationComponent,
    ActualiteComponent,
    CardVitrineComponent
  ],
  imports: [CommonModule, SharedModule, VitrineRoutingModule],
})
export class VitrineModule {}
