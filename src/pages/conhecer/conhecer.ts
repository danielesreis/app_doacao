import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams, MenuController } from 'ionic-angular';
import { Inst1Page } from '../inst1/inst1';
import { Inst2Page } from '../inst2/inst2';
import { Inst3Page } from '../inst3/inst3';
import { Inst4Page } from '../inst4/inst4';
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

  showInst1() {
	this.navCtrl.push(Inst1Page);
  }

  showInst2() {
	this.navCtrl.push(Inst2Page);
  }

  showInst3() {
	this.navCtrl.push(Inst3Page);
  }

  showInst4() {
	this.navCtrl.push(Inst4Page);
  }

  ionViewDidEnter(){
  	this.menu.swipeEnable(false, 'menu_lateral');
  }
}
