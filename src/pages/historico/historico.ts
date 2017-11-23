import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams, MenuController } from 'ionic-angular';
import { DonateinfoPage } from '../donateinfo/donateinfo';
import { VolunteerinfoPage } from '../volunteerinfo/volunteerinfo';
import { Chart } from 'chart.js';
import { Globals } from '../../app/globals';
import { Instituicao } from '../../app/Instituicao';
import { Doacao } from '../../app/Doacao';
import { InstituicaoService } from '../../app/service/instituicao.service';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
  providers: [Globals]
})
export class HistoricoPage implements OnInit{
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  instituicoes: Instituicao[];
  doacoes: Doacao[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, globals:Globals, private instituicaoService:InstituicaoService, public menu: MenuController) {
    Globals.title = "Histórico"
  }

  ngOnInit(){
    this.instituicaoService.getInstituicoes().then(results => {
      this.instituicoes = results;
    });
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Material", "Voluntariado"],
        datasets: [{
          data: [12, 19],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          ],
          hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          ]
        }]
      }

    });
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(true, 'menu_lateral');
  }

openPopover1(event) {
  	let popover = this.popoverCtrl.create(DonateinfoPage);
  	popover.present ({ev: event});
  }

openPopover2(event) {
  	let popover = this.popoverCtrl.create(VolunteerinfoPage);
  	popover.present ({ev: event});
  }

}
