import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';

import { personPage } from './person/person';
import { walletPage } from './wallet/wallet';
import { opinionPage } from './opinion/opinion';
import { moresetPage } from './moreset/moreset';
import { carPage } from './car/car';
import { orderPage } from './order/order';

import { loginPage } from './login/login';  //登录

import { UserService } from './userService';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl:LoadingController,
              public userService: UserService) {
  }
  page:any = {
    title:'我的',
    uPic:'assets/images/pic.jpg',
    userName:'喷摩斯的丶稻草人',
    phoneNumber:'177 2329 6846',
    logined:true
  };

  ionViewDidLoad() {
    // 去读 本地存储里面的用户信息
    // 把本地的登录信息 page里面去给数据绑
    if(!this.userService.checkLogin()){
        this.navCtrl.push(loginPage);
    }
    this.page.userName = localStorage.getItem('email') || '点击登录';
    this.page.phoneNumber = localStorage.getItem('phone' || '请登录');
    this.page.logined = localStorage.getItem('loginState');
  }
  // 从子页面返回当前页面的时候调用
  ionViewCanEnter(){
    this.page.userName = localStorage.getItem('username') || '点击登录';
    this.page.phoneNumber = localStorage.getItem('phone') || '请登录';
    this.page.logined = localStorage.getItem('loginState');
  }

  goPerson(){
    this.navCtrl.push(personPage)
  }
  goWallet(){
    this.navCtrl.push(walletPage)
  }
  goOpinion(){
    this.navCtrl.push(opinionPage)
  }
  goMoreset(){
    this.navCtrl.push(moresetPage)
  }
  goCar(){
    this.navCtrl.push(carPage)
  }
  goOrder(){
    this.navCtrl.push(orderPage)
  }
  goUpdate(){
    let loader = this.loadingCtrl.create({
      content: "正在检测更新...",
    });
    loader.present();
    
    let alert = this.alertCtrl.create({
      title: '检测完毕！',
      subTitle: '已经是最新版本！',
      buttons: ['OK']
    });
   
    setTimeout(function(){
      loader.dismiss();
      alert.present();
    },3000)

  }

  

}
