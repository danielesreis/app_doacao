import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinheiroPage } from './dinheiro';

@NgModule({
  declarations: [
    DinheiroPage,
  ],
  imports: [
    IonicPageModule.forChild(DinheiroPage),
  ],
})
export class DinheiroPageModule {}
