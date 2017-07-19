import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newsDetail',
  templateUrl: 'newsDetail.html'
})
export class NewsDetailPage {
  item;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.item = this.navParams.data;
  }
  goodAdd(){
    if(this.item.goodState){
      this.item.good++;
      this.item.goodState = false;
    }else{
      this.item.good--;
      this.item.goodState = true;
    }
    
  }

}
