import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Globals } from '../../app/globals';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [Globals]
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals) {
  	Globals.title = "Perfil"

  }
  get user(){
  	return Globals.user;
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }
}
