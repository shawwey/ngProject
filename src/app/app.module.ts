import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

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

import { TodoComponent } from './todo/todo.component';
//引入路由
import { routing } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    TodoComponent,
    ComponentDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: 'register',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path:'login',
    //     component:LoginComponent
    //   },
    //   {
    //     path:'register',
    //     component:RegisterComponent
    //   }
      
    //])
   ],
  providers: [{provide:'login',useClass:LoginService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
