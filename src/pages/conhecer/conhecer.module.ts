import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConhecerPage } from './conhecer';
import { InstPage } from '../inst/inst';
import { SearchPage } from '../search/search';
import { InstituicaoService } from '../../app/service/instituicao.service';

@NgModule({
  declarations: [
    ConhecerPage,
    InstPage,
  ],
  imports: [
    IonicPageModule.forChild(ConhecerPage),
  ],
  providers: [
  	InstituicaoService
  ]
})
export class ConhecerPageModule {}
