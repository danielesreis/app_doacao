import { InstituicaoService } from '../../app/service/instituicao.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams, MenuController } from 'ionic-angular';
import { InstPage } from '../inst/inst';
import { SearchPage } from '../search/search';
import { Globals } from '../../app/globals';

@IonicPage()
@Component({
  selector: 'page-conhecer',
  templateUrl: 'conhecer.html',
  providers: [InstituicaoService, Globals]
})
export class ConhecerPage implements OnInit{
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public popoverCtrl: PopoverController, globals:Globals, instituicaoService:InstituicaoService) {
    Globals.title = "Instituições";
  }
  ngOnInit(){

  }
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


  // get instituicoes(){
  //   return this.instituicaoService.getInstituicoes();
  // }
}
