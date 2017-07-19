import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';

import { personPage } from './person/person';
import { walletPage } from './wallet/wallet';
import { opinionPage } from './opinion/opinion';
import { moresetPage } from './moreset/moreset';
import { carPage } from './car/car';
import { orderPage } from './order/order';
import { loginPage } from './login/login';  //登录



@NgModule({
  declarations: [
    UserPage,
    personPage,
    walletPage,
    opinionPage,
    moresetPage,
    carPage,
    orderPage,
    loginPage

  ],
  entryComponents:[
    personPage,
    walletPage,
    opinionPage,
    moresetPage,
    carPage,
    orderPage,
    loginPage
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
  exports: [
    UserPage,
    personPage,
    walletPage,
    opinionPage,
    moresetPage,
    carPage,
    orderPage,
    loginPage

    
  ]
})
export class UserPageModule {}
