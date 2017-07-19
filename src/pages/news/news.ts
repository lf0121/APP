import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { chatPage } from './chat/chat';
import { friendPage } from './friend/friend';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  goChat(user){
    this.navCtrl.push(chatPage,user)
  }
  goFriend(user){
    this.navCtrl.push(friendPage,user)
  }



  page:any = {
    choose:'messages',
    messageList:[
      {
        uPic:'assets/images/pic.jpg',
        name:'哇嘻嘻',
        content:'你吃饭没',
        lastTime:'今天08:33',
        cont:'16'
      },{
        uPic:'assets/images/pic1.jpg',
        name:'棒棒糖',
        content:'周末去哪里玩',
        lastTime:'今天10:47',
        cont:'3'
      },{
        uPic:'assets/images/uPic.png',
        name:'爽歪歪',
        content:'我明天去玩',
        lastTime:'昨天13:07',
        cont:'37'
      },{
        uPic:'assets/images/list-03.png',
        name:'嘻嘻',
        content:'你在哪个国家哦',
        lastTime:'前天13:49',
        cont:''
      }
    ],
    firendsList:[
      {
        uPic:'assets/images/pic.jpg',
        name:'哇嘻嘻',
      },{
        uPic:'assets/images/pic1.jpg',
        name:'棒棒糖',
      },{
          uPic:'assets/images/uPic.png',
          name:'爽歪歪',
      }
    ]
    
  }

}
