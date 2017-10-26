import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConhecerPage } from './conhecer';
import { InstPage } from '../inst/inst';
import { SearchPage } from '../search/search';

@NgModule({
  declarations: [
    ConhecerPage,
    InstPage,
  ],
  imports: [
    IonicPageModule.forChild(ConhecerPage),
  ],
})
export class ConhecerPageModule {}
