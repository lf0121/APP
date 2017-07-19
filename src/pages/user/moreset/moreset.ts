import { Component } from '@angular/core';
import { NavController,LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-moreset',
  templateUrl: 'moreset.html'
})
export class moresetPage {

  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController) {

  }
  page:any = {
    alert:false,
    message:false,
    video:true,
    cache:'547.45'
  }
  presentLoading() {
    let self = this;
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      // duration: 3000,  多少时间后关闭
    });
    loader.present();

    setTimeout(function(){
      self.page.cache = '0';
      loader.dismiss();
    },3000)

  }
 
  

}
