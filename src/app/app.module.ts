import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//登录
import { LoginComponent } from './login/login.component';
//用户首页
import { UserComponent } from './user/user.component';
//注册页面
import { RegisterComponent } from './register/register.component';
//生命周期例子
import { ComponentDateComponent } from './component-date/component-date.component';
//登录服务
import { LoginService } from './core/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ComponentDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide:'login',useClass:LoginService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
