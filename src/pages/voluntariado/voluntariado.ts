import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Instituicao } from '../../app/Instituicao';
import { Globals } from '../../app/globals';
import { InstituicaoService } from '../../app/service/instituicao.service';
/**
 * Generated class for the VoluntariadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voluntariado',
  templateUrl: 'voluntariado.html',
  providers: [InstituicaoService, Globals]
})
export class VoluntariadoPage implements OnInit{
  instituicoes: Instituicao[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private instituicaoService:InstituicaoService) {
    Globals.title = "Trabalho voluntário";
  }

  ngOnInit(){
    this.instituicaoService.getInstituicoes().then(results => {
      this.instituicoes = results;
    });
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }

  showDoar() {
  	this.navCtrl.pop();
  }

}
