import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { AuthService } from '../../app/service/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loading: Loading;
	registerCredentials = {email: '', password: ''};
  
  	constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public view: ViewController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  	public login(){
  		this.showLoading()
  		this.auth.login(this.registerCredentials).subscribe(allowed => {
  			if(allowed){
  				this.navCtrl.setRoot('HomePage');
  			}
  			else{
  				this.showError("Access Denied");
  			}
  		},
  		error => {
  			this.showError(error);
  		});
  	}

  openPopoverCadastro(event) {
  	this.view.dismiss();
    let popover = this.popoverCtrl.create(CadastroPage);
    popover.present ({ev: event});
  }

  showLoading(){
  	this.loading = this.loadingCtrl.create({
  		content: 'Please wait...',
  		dismissOnPageChange: true
  	});
  	this.loading.present();
  }

  showError(text){
  	this.loading.dismiss();

  	let alert = this.alertCtrl.create({
  		title: 'Fail',
  		subTitle: text,
  		buttons: ['OK']
  	});
  	alert.present();
  }
}
