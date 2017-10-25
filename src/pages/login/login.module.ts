import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { CadastroPage } from '../cadastro/cadastro';

@NgModule({
  declarations: [
    LoginPage,
    CadastroPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
