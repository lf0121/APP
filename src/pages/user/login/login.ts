import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import { UserService } from '../userService';    //请求

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class loginPage {
  
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public userService: UserService) {

  }
  page:any = {
    title:'登录',
    user:{
      username:'',
      password:''
    }
  }

  
  login(){
    let _this = this;
    if( _this.page.user.username.length>0 && _this.page.user.password.length>0 ){
        this.userService.post('login',this.page.user)
            .then(function(d){
                if( d.data.success>0 ){
                      _this.navCtrl.pop();
                      var storage = localStorage;
                          storage.setItem('loginState','true');
                          storage.setItem('username',d.data.data[0].username);
                          storage.setItem('email',d.data.data[0].email);
                          storage.setItem('phone',d.data.data[0].phone);
                          console.log(d.data.data[0])
                }else{
                    let alert = _this.alertCtrl.create({
                        title:'警告！',
                        message:'账号密码错误...',
                        buttons:['确认']
                    });
                    alert.present();
                }
            }).catch(function(err){
                console.log(err)
            })
    }else{
      let alert = this.alertCtrl.create({
          title:'警告！',
          message:'账号密码不能为空...',
          buttons:['确认']
      });
      alert.present();
    }

    
  }
  
  

}
