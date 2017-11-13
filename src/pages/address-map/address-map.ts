import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {GoogleMaps, GoogleMap, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, GoogleMapsEvent} from '@ionic-native/google-maps';
import {Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

@IonicPage()
@Component({
  selector: 'page-address-map',
  templateUrl: 'address-map.html',
  providers: []
})
export class AddressMapPage implements OnInit{

	map: GoogleMap;

	constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps:GoogleMaps, private geolocation: Geolocation, private geocoder: NativeGeocoder){

	}

	ngOnInit(){
		this.loadMap();
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