import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';
import { AuthService } from '../../app/service/auth.service';
import { Globals } from '../../app/globals';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Globals]
})
export class LoginPage {
  @ViewChild('mycontent') nav: NavController;
	loading: Loading;
	registerCredentials = {email: '', password: ''};
  
  	constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public view: ViewController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, globals:Globals) {
      Globals.title = "Login";
    }

  	public login(){
  		this.showLoading()
  		this.auth.login(this.registerCredentials).then(allow => {
        allow
        .subscribe((allowed) => {
          if(allowed){
            this.navCtrl.push(MyApp);
          }
          else{
            this.showError("Access Denied");
          }
        },
        error => {
          this.showError(error);
        }
        )
      });
  	}

  openPopoverCadastro(event) {
  	this.view.dismiss();
    let popover = this.popoverCtrl.create(CadastroPage);
    popover.present ({ev: event});
  }

  showCadastro(){
    this.nav.push(CadastroPage);
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
