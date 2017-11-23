import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, PopoverController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';
import { DoarPage } from '../pages/doar/doar';
import { PontosPage } from '../pages/pontos/pontos';
import { HistoricoPage } from '../pages/historico/historico';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { Globals } from './globals';
import { AuthService } from './service/auth.service';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers: [Globals],
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public popoverCtrl: PopoverController, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    Globals.title = "Bem vindo ao DOAR!";

    Globals.user = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):false;
    /*let info = this.auth.getUserInfo();
    this.user = info['name'];
    this.email = info['email'];*/
  }

  public logout(){
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(HomePage);
    });
  }

  openPopover(event) {
    let popover = this.popoverCtrl.create(LoginPage);
    popover.present ({ev: event});
  }

  showLogin(){
    this.nav.push(LoginPage);
  }

  showPerfil(){
    this.nav.push(PerfilPage);
  }

  showDoar(){
    this.nav.push(DoarPage);
  }

  showPontos(){
    this.nav.push(PontosPage);
  }

  showHistorico(){
    this.nav.push(HistoricoPage);
  }

  showSobre(){
    this.nav.push(SobrePage);
  }

  showHome(){
    this.nav.push(HomePage);
  }

  get title(){
    return Globals.title;
  }

  get user(){
    return Globals.user;
  }
}

