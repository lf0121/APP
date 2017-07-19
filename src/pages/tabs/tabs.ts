import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { ClubPage } from '../club/club';
import { NewsPage } from '../news/news';
import { loginPage } from '../login/login';
import { regPage } from '../reg/reg';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  user = UserPage;
  club = ClubPage;
  news = NewsPage;
  login = loginPage;
  reg = regPage;

  // 构造函数 优先执行
  constructor() {

  }
}
