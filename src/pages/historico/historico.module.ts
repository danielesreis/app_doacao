import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPage } from './historico';
import { DonateinfoPage } from '../donateinfo/donateinfo';
import { VolunteerinfoPage } from '../volunteerinfo/volunteerinfo';

@NgModule({
  declarations: [
    HistoricoPage,
    DonateinfoPage,
    VolunteerinfoPage
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPage),
  ],
})
export class HistoricoPageModule {}
