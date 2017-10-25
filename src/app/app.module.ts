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
import { Inst1Page } from '../pages/inst1/inst1';
import { Inst2Page } from '../pages/inst2/inst2';
import { Inst3Page } from '../pages/inst3/inst3';
import { Inst4Page } from '../pages/inst4/inst4';
import { SearchPage } from '../pages/search/search';

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
    Inst1Page,
    Inst2Page,
    Inst3Page,
    Inst4Page,
    SearchPage
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
    Inst1Page,
    Inst2Page,
    Inst3Page,
    Inst4Page,
    SearchPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
