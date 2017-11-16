import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Instituicao } from '../../app/Instituicao';
import { Globals } from '../../app/globals';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { DoacaoService } from '../../app/service/doacao.service';
import { LoginPage } from '../login/login';

import { AddressMapPage } from '../address-map/address-map';

import {ModalController, Modal} from 'ionic-angular';

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
  styles: [],
  providers: [InstituicaoService, Globals]
})
export class MaterialPage implements OnInit{
  instituicoes: Instituicao[];
  show = true;
  doacao = {
    doador: null,
    instituicao: null,
    estado: null,
    endereco: null,
    descricao: null,
    hora_inicio: null,
    hora_fim: null,
    data: null,
    tipo: this.doacaoService.tipo.MATERIAL
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private instituicaoService:InstituicaoService, private doacaoService: DoacaoService, private modalCtrl: ModalController) {

    Globals.title = "Doação de material";
    if(!Globals.user){
      navCtrl.pop();  
      navCtrl.push(LoginPage);
    }
    else{
      this.doacao.endereco = Globals.user.endereco;
      this.doacao.doador = Globals.user.id;
    }
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
  
  doar(){
    console.log(this.doacao);
    this.doacaoService.doar(this.doacao).then(result => {
      this.navCtrl.pop();
    },
    error => {
      console.log(error);
    });
  }

  mapModal: Modal;
  showMap(){
    this.mapModal = this.modalCtrl.create(AddressMapPage);

    this.show = false;
    this.mapModal.present();
    this.mapModal.onDidDismiss((addr) => {
      this.show = true;
      this.doacao.endereco = addr.thoroughfare+', '+addr.subThoroughfare+'\n'+addr.subLocality+', '+addr.locality+', '+addr.administrativeArea+'\n'+addr.countryName+'\n'+addr.postalCode;
    })
  }

}
