import { Injectable } from '@angular/core';     //引入服务

import axios from 'axios';    //请求

const httpUrl = 'http://localhost:3000/';

@Injectable()


export class UserService {
    // 检查登录
  checkLogin(){
      let login = localStorage.getItem('loginState');
      if(login){
        return true;
      }else{
        return false;
      }
  }

  post(action,data){
      return axios.post(httpUrl+action,data);
  }
}
