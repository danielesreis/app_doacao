import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Instituicao } from '../../app/Instituicao';
import { Globals } from '../../app/globals';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { DoacaoService } from '../../app/service/doacao.service';
import { LoginPage } from '../login/login';
import {GoogleMaps, GoogleMap, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, GoogleMapsEvent} from '@ionic-native/google-maps';
import {Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
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
  map: GoogleMap;
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private instituicaoService:InstituicaoService, private doacaoService: DoacaoService, private googleMaps:GoogleMaps, private geolocation: Geolocation, private geocoder: NativeGeocoder) {
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
    this.loadMap();
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

  loadMap(){
    this.geolocation.getCurrentPosition().then((resp) => {
     let mapOptions: GoogleMapOptions = {
         camera: {
           target: {
             lat: resp.coords.latitude,
             lng: resp.coords.longitude
           },
           zoom: 17,
           tilt: 30
         }
       };
       this.map = this.googleMaps.create('map_canvas', mapOptions);

       // Wait the MAP_READY before using any methods.
       this.map.one(GoogleMapsEvent.MAP_READY)
         .then(() => {  
           // Now you can use all methods safely.
           this.map.addMarker({
               title: 'Localização',
               icon: 'orange',
               animation: 'DROP',
               snippet: '',
               position: {
                 lat: resp.coords.latitude,
                 lng: resp.coords.longitude
               }
             })
           .then(marker => {
             marker.showInfoWindow();
             this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(coords => {
               marker.setPosition(coords[0]);
               //alert(JSON.stringify(coords[0]));
               this.geocoder.reverseGeocode(coords[0].lat, coords[0].lng).then(addr => {
                 marker.setSnippet(addr.thoroughfare+', '+addr.subThoroughfare+'\n'+addr.subLocality+', '+addr.locality+', '+addr.administrativeArea+'\n'+addr.countryName+'\n'+addr.postalCode);
                 marker.showInfoWindow();
               },
               error => {
                 alert(JSON.stringify(error));
               });
             });
           })
         });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  
}
}
