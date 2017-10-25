import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MaterialPage } from '../material/material';
import { DinheiroPage } from '../dinheiro/dinheiro';
import { VoluntariadoPage } from '../voluntariado/voluntariado';


@IonicPage()
@Component({
  selector: 'page-doar',
  templateUrl: 'doar.html',
})
export class DoarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
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

  ionViewDidEnter(){
    this.menu.swipeEnable(false, 'menu_lateral');
  }

}
