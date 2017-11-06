import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Modal, NavController, PopoverController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';
import { PontosPage } from '../pages/pontos/pontos';
import { HistoricoPage } from '../pages/historico/historico';
import { SobrePage } from '../pages/sobre/sobre';
import { InstPage } from '../pages/inst/inst';
import { SearchPage } from '../pages/search/search';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { DonateinfoPage } from '../pages/donateinfo/donateinfo';
import { VolunteerinfoPage } from '../pages/volunteerinfo/volunteerinfo';
import { Globals } from './globals';
import { InstituicaoService } from './service/instituicao.service';
import { AuthService } from './service/auth.service';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers: [Globals],
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController;
  rootPage:any = HomePage;
  email = '';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public popoverCtrl: PopoverController, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    Globals.title = "Bem vindo ao DOAR!";
    /*let info = this.auth.getUserInfo();
    this.user = info['name'];
    this.email = info['email'];*/
  }

  public logout(){
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('HomePage')
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

  showPontos(){
    this.nav.push(PontosPage);
  }

  showHistorico(){
    this.nav.push(HistoricoPage);
  }

  showSobre(){
    this.nav.push(SobrePage);
  }
  get title(){
    return Globals.title;
  }
  get user(){
    return Globals.user;
  }

}

