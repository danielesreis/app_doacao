import { Component , ViewChild, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { InstituicaoService } from '../../app/service/instituicao.service';
import { Instituicao } from '../../app/Instituicao';
import {GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent} from '@ionic-native/google-maps';

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
export class InstPage implements OnInit {
	instituicao:Instituicao;
	map: GoogleMap;
	@ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, private instituicaoService:InstituicaoService, public menu: MenuController, private googleMaps: GoogleMaps) {
  	
  	this.instituicaoService.getInstituicao(this.navParams.get("id")).then(result => {
  		this.instituicao = result;
  		console.log(this.instituicao);
  		this.content.resize();
  	}, error => {console.log(error);});
  }
  ngOnInit(){
  }

loadMap(){
	let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.instituicao.lat,
          lng: this.instituicao.lng
        },
        zoom: 18,
        tilt: 30
      }
  	};
  	this.map = this.googleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        // Now you can use all methods safely.
        this.map.addMarker({
            title: this.instituicao.nome,
            icon: 'orange',
            animation: 'DROP',
            snippet: this.instituicao.endereco,
            position: {
              lat: this.instituicao.lat,
              lng: this.instituicao.lng
            }
          })
        .then(marker => {
        	marker.showInfoWindow();
        })
      });
}

ionViewDidEnter(){
  	this.menu.swipeEnable(true, 'menu_lateral');
  	this.loadMap();
  	this.content.resize();
  }
}
