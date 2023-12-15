import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

document.addEventListener('scroll', ()=>{
  const coordinates = document.body.getBoundingClientRect();
  if (coordinates.y < -10) {
    document.querySelector('header')?.classList.add('away-from-top');
  } else {
    document.querySelector('header')?.classList.remove('away-from-top');
  }
});