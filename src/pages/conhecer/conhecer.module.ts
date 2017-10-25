import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConhecerPage } from './conhecer';
import { Inst1Page } from '../inst1/inst1';
import { Inst2Page } from '../inst2/inst2';
import { Inst3Page } from '../inst3/inst3';
import { Inst4Page } from '../inst4/inst4';

@NgModule({
  declarations: [
    ConhecerPage,
    Inst1Page,
    Inst2Page,
    Inst3Page,
    Inst4Page
  ],
  imports: [
    IonicPageModule.forChild(ConhecerPage),
  ],
})
export class ConhecerPageModule {}
