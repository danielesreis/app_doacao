import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Instituicao } from '../../app/Instituicao';
import { Globals } from '../../app/globals';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { DoacaoService } from '../../app/service/doacao.service';
/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
  providers: [InstituicaoService, Globals]
})
export class MaterialPage implements OnInit{
  instituicoes: Instituicao[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private instituicaoService:InstituicaoService, private doacaoService: DoacaoService) {
    Globals.title = "Doação de material";
  }

  ngOnInit(){
    this.instituicaoService.getInstituicoes().then(results => {
      this.instituicoes = results;
    });
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }

  showDoar(){
  	this.navCtrl.pop();
  }
  doacao = {
    doador: Globals.user.id,
    instituicao: null,
    estado: null,
    endereco: null,
    descricao: null,
    hora_inicio: null,
    hora_fim: null,
    data: null,
    tipo: this.doacaoService.tipo.MATERIAL
  }
  doar(){
    console.log(this.doacao);
    this.doacaoService.doar(this.doacao).then(result => {
      console.log(result);
    },
    error => {
      console.log(error);
    });
  }
}
