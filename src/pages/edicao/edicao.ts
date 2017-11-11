import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController, AlertController, MenuController } from 'ionic-angular';
import { AuthService } from '../../app/service/auth.service';
import { Globals } from '../../app/globals';
import { PerfilPage } from '../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-edicao',
  templateUrl: 'edicao.html',
  providers: [Globals]
})
export class EdicaoPage {

	createSuccess = false;
	//registerCredentials = {email: '', password: ''};
data = Globals.user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public popoverCtrl: PopoverController, private auth: AuthService, private alertCtrl: AlertController, globals:Globals, public menu: MenuController) {
    Globals.title = "Editar Usuário";
  }



  updateUser(data){
       data.id = Globals.user.id;
       this.auth.updateUser(data).then(result => {this.navCtrl.push(PerfilPage);});
       // Globals.user.foto = Globals.apiUrl+'avatar/'+Globals.user.id+'.jpg';
       // localStorage.setItem("user", JSON.stringify(Globals.user));
   }

  showPopup(title, text){
  	let alert = this.alertCtrl.create({
  		title: title,
  		subTitle: text,
  		buttons: [
  		{
  			text: 'OK',
  			handler: data => {
  				if(this.createSuccess){
  					this.navCtrl.popToRoot();
  				}
  			}
  		}
  		]
  	});
  	alert.present();

  }

  Cancelar() {
  	this.view.dismiss();
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }
}
