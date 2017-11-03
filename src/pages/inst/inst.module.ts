import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstPage } from './inst';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { Instituicao } from '../../app/instituicao';

@NgModule({
  declarations: [
    InstPage,
  ],
  imports: [
  InstituicaoService,
  Instituicao,
    IonicPageModule.forChild(InstPage),
  ],
  providers: [InstituicaoService]
})
export class InstPageModule {}
