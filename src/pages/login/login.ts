import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public view: ViewController) {
  }

  openPopover(event) {
  	this.view.dismiss();
    let popover = this.popoverCtrl.create(CadastroPage);
    popover.present ({ev: event});
  }

}
