import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams } from 'ionic-angular';
import { DonateinfoPage } from '../donateinfo/donateinfo';
import { VolunteerinfoPage } from '../volunteerinfo/volunteerinfo';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

openPopover1(event) {
  	let popover = this.popoverCtrl.create(DonateinfoPage);
  	popover.present ({ev: event});
  }

openPopover2(event) {
  	let popover = this.popoverCtrl.create(VolunteerinfoPage);
  	popover.present ({ev: event});
  }

}
