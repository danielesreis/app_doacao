import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { Instituicao } from '../../app/Instituicao';

/**
 * Generated class for the InstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inst',
  templateUrl: 'inst.html',
})
export class InstPage {
	instituicao:Instituicao;
  constructor(public navCtrl: NavController, public navParams: NavParams, private instituicaoService:InstituicaoService, public menu: MenuController) {
  	this.instituicao = navParams.get("instituicao");
  }

ionViewDidEnter(){
  	this.menu.swipeEnable(true, 'menu_lateral');
  }
}
