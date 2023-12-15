import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './features/panel/components/form-login/form-login/form-login.component';
import { PanelGuard } from './features/panel/panel.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/panel/panel.module').then((m) => m.PanelModule),
      canActivate: [PanelGuard]
  },
  {
    path: 'login',
    component: FormLoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/vitrine/vitrine.module').then((m) => m.VitrineModule),
  },
  {
    path: '**',
    redirectTo: 'accueil',
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
