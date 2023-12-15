import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DonationStateModule } from './store/donation/donation-state.module';
import { ContributorStateModule } from './store/contributor/contributor-state.module';
import { FooterComponent } from './components/footer/footer.component';
import { SplashscreenComponent } from './components/splashscreen/splashscreen.component';
import { CookieService } from 'ngx-cookie-service';

const coreComponents = [HeaderComponent, FooterComponent, SplashscreenComponent];

@NgModule({
  declarations: [...coreComponents],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DonationStateModule, 
    ContributorStateModule,
  ],
  exports: [...coreComponents],
  providers: [CookieService]
})
export class CoreModule {}
