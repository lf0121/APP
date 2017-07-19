import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewsDetailPage } from './newsDetail/newsDetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsList:any[] = [{
    userPic:'assets/images/pic1.jpg',
    userName:'喷摩斯的丶稻草人',
    createTime:'2017-07-10 13:14',
    carType:'雪佛兰·科迈罗',
    color:'黄色',
    news:'今天带妹儿去小树林耍哈',
    photos:['assets/images/list-01.png','assets/images/list-02.png','assets/images/list-03.png'],
    good:67878,
    goodState:true,
    say:43376
  },{
    userPic:'assets/images/pic.jpg',
    userName:'稻草人',
    createTime:'2017-07-10 15:14',
    carType:'野马',
    color:'黑色',
    news:'今天带妹儿去小树林耍哈',
    photos:['assets/images/list-01.png','assets/images/list-02.png','assets/images/list-03.png'],
    good:67878,
    goodState:true,
    say:43376
  },{
    userPic:'assets/images/pic1.jpg',
    userName:'喷摩斯的丶稻草人',
    createTime:'2017-07-11 13:14',
    carType:'雪佛兰·科迈罗',
    color:'黄色',
    news:'今天带妹儿去小树林耍哈',
    photos:['assets/images/list-01.png','assets/images/list-02.png','assets/images/list-03.png'],
    good:67878,
    goodState:true,
    say:43376
  },{
    userPic:'assets/images/pic1.jpg',
    userName:'喷摩斯的丶稻草人',
    createTime:'2017-07-11 13:14',
    carType:'雪佛兰·科迈罗',
    color:'黄色',
    news:'今天带妹儿去小树林耍哈',
    video:['assets/images/ad4.jpg'],
    good:67878,
    say:43376,
    goodState:true,
  }];
  constructor(public navCtrl: NavController) {

  }
  goodAdd(index){
    if(this.newsList[index].goodState){
      this.newsList[index].good++;
      this.newsList[index].goodState=false;
    }else{
      this.newsList[index].good--;
      this.newsList[index].goodState=true;
    }
  }
  goDetail(index){
    this.navCtrl.push(NewsDetailPage,this.newsList[index]);
  }

}
