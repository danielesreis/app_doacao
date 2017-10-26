import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConhecerPage } from '../pages/conhecer/conhecer';
import { DoarPage } from '../pages/doar/doar';
import { MaterialPage } from '../pages/material/material';
import { DinheiroPage } from '../pages/dinheiro/dinheiro';
import { VoluntariadoPage } from '../pages/voluntariado/voluntariado';
import { PerfilPage } from '../pages/perfil/perfil';
import { PontosPage } from '../pages/pontos/pontos';
import { HistoricoPage } from '../pages/historico/historico';
import { SobrePage } from '../pages/sobre/sobre';
import { InstPage } from '../pages/inst/inst';
import { SearchPage } from '../pages/search/search';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConhecerPage,
    DoarPage,
    MaterialPage,
    DinheiroPage,
    VoluntariadoPage,
    PerfilPage,
    PontosPage,
    HistoricoPage,
    SobrePage,
    InstPage,
    SearchPage,
    LoginPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConhecerPage,
    DoarPage,
    MaterialPage,
    DinheiroPage,
    VoluntariadoPage,
    PerfilPage,
    PontosPage,
    HistoricoPage,
    SobrePage,
    InstPage,
    SearchPage,
    LoginPage,
    CadastroPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
