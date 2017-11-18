import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Globals } from '../../app/globals';
import { ImagemService } from '../../app/service/imagem.service';
import { AuthService } from '../../app/service/auth.service';

import { ActionSheetController } from 'ionic-angular';

import { EdicaoPage } from '../edicao/edicao';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, globals: Globals, private imagemService: ImagemService, private actionSheetCtrl: ActionSheetController, private auth: AuthService) {
  	Globals.title = "Perfil"

  }
  get user(){
  	return Globals.user;
  }

  
  getPicture(){
         let actionSheet = this.actionSheetCtrl.create({
           buttons: [
             {
               text: 'Câmera',
               handler: () => {
                 this.imagemService.getPicture('camera').then(imageData => {
                   this.imagemService.upload(imageData, 'updateAvatar', Globals.user.id+'.jpg').then(result => {
                     if(result) this.updateUser({foto: result.url});  
                   });
                   
                 });
               }
             },{
               text: 'Galeria',
               handler: () => {
                 this.imagemService.getPicture('galeria').then(imageData => {
                   this.imagemService.upload(imageData, 'updateAvatar', Globals.user.id+'.jpg').then(result => {
                     if(result) this.updateUser({foto: result.url});  
                   });
                   
                 });
               }
             }
           ]
         });
         actionSheet.present();
  }

   updateUser(data){
       data.id = Globals.user.id;
       this.auth.updateUser(data).then();
       // Globals.user.foto = Globals.apiUrl+'avatar/'+Globals.user.id+'.jpg';
       // localStorage.setItem("user", JSON.stringify(Globals.user));
   }

   openEdicao(){
     this.navCtrl.push(EdicaoPage);
   }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }
}
