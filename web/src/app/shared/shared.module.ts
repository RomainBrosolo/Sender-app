import { NgModule } from '@angular/core';
import { MaterialModule } from './vendors/material/material.module';
import { DialogHelloAssoComponent } from './components/dialog-hello-asso/dialog-hello-asso.component';
import { DialogTaxationComponent } from './components/dialog-taxation/dialog-taxation.component';
import { DateFormatPipe } from './pipes/date.pipe';


@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule, DateFormatPipe],
  declarations: [
    DialogHelloAssoComponent,
    DialogTaxationComponent,
    DateFormatPipe
  ],
})
export class SharedModule {}
