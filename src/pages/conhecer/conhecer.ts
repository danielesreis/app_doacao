import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams, MenuController } from 'ionic-angular';
import { InstPage } from '../inst/inst';
import { SearchPage } from '../search/search';

@IonicPage()
@Component({
  selector: 'page-conhecer',
  templateUrl: 'conhecer.html',
})
export class ConhecerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public popoverCtrl: PopoverController) {}

  openPopover(event) {
  	let popover = this.popoverCtrl.create(SearchPage);
  	popover.present ({ev: event});
  }

  showInst() {
	this.navCtrl.push(InstPage);
  }

  ionViewDidEnter(){
  	this.menu.swipeEnable(false, 'menu_lateral');
  }
}
