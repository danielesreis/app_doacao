import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoarPage } from './doar';
import { MaterialPage } from '../material/material';
import { DinheiroPage } from '../dinheiro/dinheiro';
import { VoluntariadoPage } from '../voluntariado/voluntariado';

@NgModule({
  declarations: [
    DoarPage,
    MaterialPage,
    DinheiroPage,
    VoluntariadoPage
  ],
  imports: [
    IonicPageModule.forChild(DoarPage),
  ],
})
export class DoarPageModule {}
