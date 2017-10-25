import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public popoverCtrl: PopoverController) {
  }

  novoCadastro() {

  }

  Cancelar() {
  	this.view.dismiss();
  }

}
