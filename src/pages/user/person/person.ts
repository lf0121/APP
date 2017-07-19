import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class personPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  page:any = {
    title:'个人资料设置',
    uPic:'assets/images/pic1.jpg',
    userName:'喷摩斯的丶稻草人',
    phoneNumber:'177 2329 6846',
    birth:'1994-01-21',
    sex:'0',
    password:'123456'
  };
  // 对话框方法，封装
  /**
   * 对话框
   * @param title   对话框标题
   * @param message   对话框信息
   * @param callback  对话框回调
   */ 
  prompt( title,message,callback ){
    let prt = this.alertCtrl.create({
      title:title,
      message:message,
      inputs:[{
        name:'value',
        placeholder: ''
      }],
      buttons:[{ text:'取消'
      },{ text: '保存',
        handler: data => {
          callback( data.value );
        }
      }]
    });
    prt.present()
  }
  // 修改昵称
  editName(){
    let self = this;
    this.prompt('修改昵称','你换名字，对得起你爹娘吗',function(val){
      self.page.userName = val;
    })
    // let self = this;
    // let prompt = this.alertCtrl.create({
    //   title: '修改昵称',
    //   message:'你换名字，对得起你爹娘吗？',
    //   inputs:[{
    //     name:'userName',
    //     placeholder: '那你想换什么名字？'
    //   }],
    //   buttons:[{
    //     text:'取消',
    //     handler: data => {
    //       console.log('取消'+data.userName);
    //     }
    //   },{
    //     text: '保存',
    //     handler: data => {
    //       self.page.userName = data.userName
    //     }
    //   }]
    // });
    // prompt.present();
  };
  // 修改手机号
  changePhone(){
    let self = this;
    this.prompt('修改手机号','你确定修改手机号吗',function(val){
      self.page.phoneNumber = val;
    })
  };
  // 修改密码
  changePassword(){
    let self = this;
    this.prompt('修改密码','你确定要换密码吗',function(val){
      self.page.password = val;
    })
  }

}
