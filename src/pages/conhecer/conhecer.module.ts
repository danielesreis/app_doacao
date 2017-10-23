import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConhecerPage } from './conhecer';

@NgModule({
  declarations: [
    ConhecerPage,
  ],
  imports: [
    IonicPageModule.forChild(ConhecerPage),
  ],
})
export class ConhecerPageModule {}
