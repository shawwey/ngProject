import { Component, OnInit, Inject } from '@angular/core';
import { UserModel} from './UserModel';
//方式一和方式二引入
//import { LoginService } from '../core/login.service';
//方式三引入
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="contant">
    <label>姓名</label>
    <input name="username" type="text" [(ngModel)]="user.username" #usernameRef="ngModel"/>
    <br>
    你输入的姓名是：{{user.username}}
    <br>
    <label>密码</label> 
    <input name="password" #password type="password"/>
    <br>
    <label>年龄</label>    
    <input name="age" [(ngModel)]="user.age"/>
    <label>邮箱</label>
    <input name="email" [value]="'562558391@qq.com'"/>
    <br>
    <button type="button" class="btn btn-primary" (click)="onClick(usernameRef.value,password.value)">
      确定
    </button>
  </div>
  `,
  styles: [`
    input {height:30px;width:1000px;}
  `],
  //方式二引入
  // providers:[LoginService]
})
export class LoginComponent implements OnInit {
 
  //方式一
  //service: LoginService ;
  //constructor() {
    //this.service = new LoginService ();
  //}

  //方式二：
  //constructor(private service: LoginService) {  }

  //方式三：
  //在app.module.ts里头的providers定义登录服务
  // providers: [
     //{ provide: 'login', useClass: LoginService }]

  constructor(@Inject('login') private service){    }
  //通过对象方式编写
  private user=new UserModel();

  ngOnInit() {
   
  }
  onClick(username,password){
    console.log("结果："+this.service.doLogin(username,password));
    console.log(JSON.stringify(this.user));
  }

}
