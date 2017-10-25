import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Inst2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inst2',
  templateUrl: 'inst2.html',
})
export class Inst2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false, 'menu_lateral');
  }
}
