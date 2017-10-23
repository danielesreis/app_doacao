import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConhecerPage } from '../conhecer/conhecer';
import { DoarPage } from '../doar/doar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {
  
    }

    showConhecer() {
	this.navCtrl.push(ConhecerPage);
	}

	showDoar(){
	this.navCtrl.push(DoarPage);
	}
}
