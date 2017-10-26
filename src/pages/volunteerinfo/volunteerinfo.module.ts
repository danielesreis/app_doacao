import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteerinfoPage } from './volunteerinfo';

@NgModule({
  declarations: [
    VolunteerinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunteerinfoPage),
  ],
})
export class VolunteerinfoPageModule {}
