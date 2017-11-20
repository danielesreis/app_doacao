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
  data = Globals.user;
  createSuccess = false;
  inactiveNome: boolean = true;
  inactiveEmail: boolean = true;
  inactiveTelefone: boolean = true;
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
                     this.data.foto = result.url;
                     if(result) this.updateUser();  
                   });
                   
                 });
               }
             },{
               text: 'Galeria',
               handler: () => {
                 this.imagemService.getPicture('galeria').then(imageData => {
                   this.imagemService.upload(imageData, 'updateAvatar', Globals.user.id+'.jpg').then(result => {
                     this.data.foto = result.url;
                     if(result) this.updateUser();  
                   });
                   
                 });
               }
             }
           ]
         });
         actionSheet.present();
  }

   updateUser(){
       this.auth.updateUser(this.data).then(result => {
         this.inactiveEmail = true;
         this.inactiveNome = true;
         this.inactiveTelefone = true;
       });
       // Globals.user.foto = Globals.apiUrl+'avatar/'+Globals.user.id+'.jpg';
       // localStorage.setItem("user", JSON.stringify(Globals.user));
   }

  

   openEdicao(){
     this.navCtrl.push(EdicaoPage);
   }

   edit(tipo){
    if(tipo == 'nome'){
      this.inactiveNome = false;
      this.inactiveEmail = true;
      this.inactiveTelefone = true;
    }
    else if(tipo == 'email'){
      this.inactiveEmail = false;
      this.inactiveNome = true;
      this.inactiveTelefone = true;
    }
    else if(tipo == 'telefone'){
      this.inactiveEmail = true;
      this.inactiveNome = true;
      this.inactiveTelefone = false;
    }
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }
}
