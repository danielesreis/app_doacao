import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController, AlertController, MenuController } from 'ionic-angular';
import { AuthService } from '../../app/service/auth.service';
import { Globals } from '../../app/globals';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [Globals]
})
export class CadastroPage {

	createSuccess = false;
	registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public popoverCtrl: PopoverController, private auth: AuthService, private alertCtrl: AlertController, globals:Globals, public menu: MenuController) {
    Globals.title = "Cadastro";
  }



  public novoCadastro() {
  	this.auth.register(this.registerCredentials).then(result => {
  		result.subscribe(success => {
        if(success){
    			this.createSuccess = true;
    			this.showPopup("Success", "Account created");
    		}
    		else{
    			this.showPopup("Error", "Problem");	
    		}
    	},
    	error => {
    		this.showPopup("Error", error);
    	})
    });
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
