import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialPage } from '../material/material';
import { DinheiroPage } from '../dinheiro/dinheiro';
import { VoluntariadoPage } from '../voluntariado/voluntariado';

/**
 * Generated class for the DoarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doar',
  templateUrl: 'doar.html',
})
export class DoarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showDoarMaterial() {
	this.navCtrl.push(MaterialPage);
  }

  showDoarDinheiro() {
   	this.navCtrl.push(DinheiroPage);
  }

  showVoluntariado() {
	this.navCtrl.push(VoluntariadoPage);
  }

}
