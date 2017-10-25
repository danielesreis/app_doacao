import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Inst1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inst1',
  templateUrl: 'inst1.html',
})
export class Inst1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false, 'menu_lateral');
  }
}
