import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { personPage } from './person/person';
import { walletPage } from './wallet/wallet';
import { moresetPage } from './moreset/moreset';
import { opinionPage } from './opinion/opinion';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {

  constructor(public navCtrl: NavController) {

  }
  goPerson(index){
    this.navCtrl.push(personPage);
  }
  goWallet(index){
    this.navCtrl.push(walletPage);
  }
  goMoreset(index){
    this.navCtrl.push(moresetPage);
  }
  goOpinion(index){
    this.navCtrl.push(opinionPage);
  }
}