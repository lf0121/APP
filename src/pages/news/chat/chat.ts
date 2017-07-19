import { Component,ElementRef,ViewChild } from '@angular/core';
import { NavController,NavParams,Content  } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class chatPage {
  @ViewChild('editor') editorEl:ElementRef;
  @ViewChild('footer') footer:ElementRef;   //在标签上绑定 #footer
  @ViewChild(Content) content:Content;

  // 钩子函数
  ionViewDidLoad(navParams: NavParams) {
    // console.log('// 加载页面')
    // console.log(this.content)
    // 在被渲染之前，设置高度44，
    let footer = this.footer.nativeElement;
        footer.style.height = '40px';
  }
  ionViewWillEnter(){
    // console.log('// 将要进入页面')
    // 已经加载完成，即将进入页面，把高度改回
    let footer = this.footer.nativeElement;
        footer.style.height = '260px';
  }
  ionViewDidEnter(){  
    // console.log('// 进入页面');
    // this.content.resize()
    // this.content.scrollToBottom(300);
    let footer = this.footer.nativeElement;
        footer.style.height = 'auto';
  }
  ionViewDidLeave(){
    console.log('// 离开页面')
  }
  ionViewWillUnload(){  
    console.log("// 销毁页面");  
  }  


  page:any = {
    user:{},
    sendState:true,
  }
  // 消息列表
  messageList = this.getMessages();

  // 表情
  face = this.getFace();

  openFace(){
    let footer = this.footer.nativeElement;
    footer.style.transform = 'translateY(0px)';
    footer.style.transition = 'transform 0.3s linear';
    // new
    this.content.resize();
    // 打开表情，让内容区滚动到底部
    let self = this;
    // 异步请求，content里面的resize是一个异步处理
    setTimeout(function(){
      self.content.scrollToBottom(300);
    },20)
    
  }
  // 发送按钮
  inputText(){
      let val = this.editorEl.nativeElement.innerHTML;
      if( val.length > 0 ){
          this.page.sendState = false
      }else{
          this.page.sendState = true;
      }
  }
  // 发送消息
  sendMessage(){
    let val = this.editorEl.nativeElement.innerHTML;
    let msg = {
        type:'self',
        userName:'爽歪歪',
        content:val,
        uPic:'assets/images/self.jpg'
      }
      this.messageList.push(msg);
      this.editorEl.nativeElement.innerHTML = '';
      let _this = this;
      setTimeout(function(){
          _this.content.scrollToBottom(0);
      },20);
      _this.page.sendState = true;
  }
  close(){
    let footer = this.footer.nativeElement;
    footer.style.transform = 'translateY(214px)';
    footer.style.transition = 'transform 0.1s linear';
    footer.style.height = '44px';
    this.content.resize();
    
    setTimeout(function(){
      footer.style.height = 'auto';
    },20)
  }

  inputFace(e){
    // e.target;
    // cloneNode克隆标签
    let tag = e.target.cloneNode(true);
        tag.className = 'classFace';
    let editorEl = this.editorEl.nativeElement;
        editorEl.appendChild(tag);
    this.page.sendState = false;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.page.user = this.navParams.data;
    
  }
  
  // 聊天
  getMessages(){
    return [
      {
        type:'other',   //区分别人和自己
        userName:'爽歪歪',
        content:'早啊',
        uPic:'assets/images/pic.jpg'
      },{
        type:'self',
        userName:'哇嘻嘻',
        content:'嘻嘻嘻嘻嘻嘻嘻嘻哈',
        uPic:'assets/images/self.jpg'
      },{
        type:'other',
        userName:'爽歪歪',
        content:'嗯哪 就是啊',
        uPic:'assets/images/pic.jpg'
      },{
        type:'other',
        userName:'爽歪歪',
        content:'嗯哪 就是啊',
        uPic:'assets/images/pic.jpg'
      },{
        type:'other',
        userName:'爽歪歪',
        content:'嗯哪 就是啊',
        uPic:'assets/images/pic.jpg'
      },{
        type:'self',
        userName:'哇嘻嘻',
        content:'嘻嘻嘻嘻嘻嘻嘻嘻',
        uPic:'assets/images/self.jpg'
      },{
        type:'self',
        userName:'哇嘻嘻',
        content:'嘻嘻嘻嘻嘻嘻嘻嘻哈哈哈哈哈读书撒飞第三个化第三个化打野个第一个',
        uPic:'assets/images/self.jpg'
      },{
        type:'self',
        userName:'哇嘻嘻',
        content:'嘻嘻嘻嘻嘻嘻嘻嘻哈哈哈哈哈读书撒飞第三个化第三个化打野个第一个',
        uPic:'assets/images/self.jpg'
      }
    ]
  }

  getFace(){
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let row = 0;
    let col = 0;
    let str;
    for(var i=1; i<141; i++)
    {
      if( i<10 ){
          str= 'assets/face/00'+i+'@2x.png'
      }else if( i>9 && i<100 ){
          str= 'assets/face/0'+i+'@2x.png'
      }else{
          str= 'assets/face/'+i+'@2x.png'
      }
      arr.push(str);
      col++;
      if( col==8 ){
          row++;
          arr2.push(arr);
          arr = [];
          col = 0;
      }
      if( row==4 ){
          arr3.push(arr2);
          arr2 = [];
          row = 0;
      }
    }
    return arr3;

  }
  

}
