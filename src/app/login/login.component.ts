import { Component, OnInit } from '@angular/core';
import{UserModel} from './UserModel';

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
  `]
})
export class LoginComponent implements OnInit {
 // public user:{username:string,password:string,age:string,eamil:string};
 
  //通过对象方式编写
  private user=new UserModel();
  constructor() {
     
  }

  ngOnInit() {
   
  }
  onClick(username,password){
    console.log(JSON.stringify(this.user));
    console.log("username:"+username+"\n\r"+"password:"+password);
  }

}
