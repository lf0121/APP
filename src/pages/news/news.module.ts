import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';

import { chatPage } from './chat/chat';
import { friendPage } from './friend/friend';

@NgModule({
  declarations: [
    NewsPage,
    chatPage,
    friendPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  entryComponents:[
    chatPage,
    friendPage
  ],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule {}
