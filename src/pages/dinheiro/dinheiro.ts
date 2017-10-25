import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the DinheiroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dinheiro',
  templateUrl: 'dinheiro.html',
})
export class DinheiroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false, 'menu_lateral');
  }

  showDoar() {
  	this.navCtrl.pop();
  }

}
