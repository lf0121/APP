import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { loginPage } from '../pages/login/login';   //登录
import { regPage } from '../pages/reg/reg';     //注册
import { TabsPage } from '../pages/tabs/tabs';
import { UserPageModule } from '../pages/user/user.module';
import { NewsPageModule } from '../pages/news/news.module';

import { ClubPage } from '../pages/club/club';
import { NewsDetailPage } from '../pages/home/newsDetail/newsDetail';
import { personPage } from '../pages/mine/person/person';
import { walletPage } from '../pages/mine/wallet/wallet';
import { moresetPage } from '../pages/mine/moreset/moreset';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserService } from '../pages/user/userService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ClubPage,
    NewsDetailPage,
    personPage,
    walletPage,
    moresetPage,
    loginPage,
    regPage
    
  ],
  imports: [
    BrowserModule,
    UserPageModule,
    NewsPageModule,


    IonicModule.forRoot(MyApp,{
      backButtonText:'返回',
      mode:'ios',
      tabsHideOnSubPages:true,   //进入子页面，隐藏主选项卡
      swipeBackEnabled:true,  //启用侧滑返回
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ClubPage,
    NewsDetailPage,
    personPage,
    walletPage,
    moresetPage,
    loginPage,
    regPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
