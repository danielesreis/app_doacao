import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Globals } from '../../app/globals';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
  providers: [Globals]
})
export class SobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, globals:Globals) {
  	Globals.title = "Sobre";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }
}
