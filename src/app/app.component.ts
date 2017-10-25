import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Modal, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';
import { PontosPage } from '../pages/pontos/pontos';
import { HistoricoPage } from '../pages/historico/historico';
import { SobrePage } from '../pages/sobre/sobre';
import { Inst1Page } from '../pages/inst1/inst1';
import { Inst2Page } from '../pages/inst2/inst2';
import { Inst3Page } from '../pages/inst3/inst3';
import { Inst4Page } from '../pages/inst4/inst4';
import { SearchPage } from '../pages/search/search';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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
}

