import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-club',
  templateUrl: 'club.html'
})
export class ClubPage {

  constructor(public navCtrl: NavController) {

  }
  page:any = [
    {
      img:'assets/images/self.jpg',
      name:'南坪汽修中心',
      start:'start',
      item:'洗车，修车，汽车改装',
      range:'4.6',
      sale:'会员9折'
    },{
      img:'assets/images/list-01.png',
      name:'江北汽修中心',
      start:'start',
      item:'洗车，修车...',
      range:'7.4',
      sale:'会员7折'
    },{
      img:'assets/images/list-03.png',
      name:'渝中大坪汽修中心',
      start:'start',
      item:'洗车，修车，改装...',
      range:'1.3',
      sale:'会员8折'
    },{
      img:'assets/images/list-02.png',
      name:'渝北汽修中心',
      start:'start',
      item:'洗车，修车，改装...',
      range:'9.3',
      sale:'会员8折'
    },{
      img:'assets/images/list-01.png',
      name:'重庆汽修中心',
      start:'start',
      item:'洗车，修车，改装...',
      range:'1.3',
      sale:'会员6折'
    },{
      img:'assets/images/list-01.png',
      name:'江北汽修中心',
      start:'start',
      item:'洗车，修车...',
      range:'7.4',
      sale:'会员7折'
    },{
      img:'assets/images/list-01.png',
      name:'江北汽修中心',
      start:'start',
      item:'洗车，修车...',
      range:'7.4',
      sale:'会员7折'
    }
  ]

}
