import { InstituicaoService } from '../../app/service/instituicao.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams, MenuController } from 'ionic-angular';
import { InstPage } from '../inst/inst';
import { SearchPage } from '../search/search';
import { Globals } from '../../app/globals';
import { Instituicao } from '../../app/Instituicao';

@IonicPage()
@Component({
  selector: 'page-conhecer',
  templateUrl: 'conhecer.html',
  providers: [InstituicaoService, Globals]
})
export class ConhecerPage implements OnInit{
  loading:boolean;
  instituicoes: Instituicao[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public popoverCtrl: PopoverController, globals:Globals, private instituicaoService:InstituicaoService) {
    Globals.title = "Instituições";
  }
  ngOnInit(){
    this.loading = true;
    this.instituicaoService.getInstituicoes().then(results => {
      this.instituicoes = results;
      this.loading = false;
    });
  }
  openPopover(event) {
  	let popover = this.popoverCtrl.create(SearchPage);
  	popover.present ({ev: event});
  }

  showInst(id) {
	  this.navCtrl.push(InstPage, {instituicao: this.instituicaoService.getInstituicao(id)});
  }

  ionViewDidEnter(){
  	this.menu.swipeEnable(false, 'menu_lateral');
  }


  // get instituicoes(){
  //   this.loading = false;
  //   return this.instituicaoService.getInstituicoes();
  // }
}
