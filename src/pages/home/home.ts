import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ConhecerPage } from '../conhecer/conhecer';
import { DoarPage } from '../doar/doar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public menu: MenuController) {

    }

  ionViewDidEnter(){
	this.menu.swipeEnable(false, 'menu_lateral');
  }

  showConhecer() {
	this.navCtrl.push(ConhecerPage);
	}

	showDoar(){
	this.navCtrl.push(DoarPage);
	}
}
