import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Instituicao } from '../../app/Instituicao';
import { Globals } from '../../app/globals';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { DoacaoService } from '../../app/service/doacao.service';
import { LoginPage } from '../login/login';
<<<<<<< HEAD
import { AddressMapPage } from '../address-map/address-map';

import {PopoverController} from 'ionic-angular';
=======
import {GoogleMaps, GoogleMap, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, GoogleMapsEvent} from '@ionic-native/google-maps';
import {Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
>>>>>>> 64b6cb13844bd08e141afb242e4b3b24673fe124
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private instituicaoService:InstituicaoService, private doacaoService: DoacaoService, private popoverCtrl: PopoverController) {

    Globals.title = "Doação de material";
    if(!Globals.user){
      navCtrl.pop();  
      navCtrl.push(LoginPage);
    }
    else
      this.doacao.doador = Globals.user.id;
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
      console.log(result);
    },
    error => {
      console.log(error);
    });
  }


  showMap(){
    let mapPopover = this.popoverCtrl.create(AddressMapPage);
    mapPopover.present();
  }

}
