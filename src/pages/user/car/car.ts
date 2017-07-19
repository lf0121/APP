import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-car',
  templateUrl: 'car.html'
})
export class carPage {

  constructor(public navCtrl: NavController) {

  }
  page:any = {
    hidden1:false,
    hidden2:true,
  }
  add(){
    let self = this;
    self.page.hidden1 = !self.page.hidden1;
    self.page.hidden2 = !self.page.hidden2;
    
  }

}
