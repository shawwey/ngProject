import { Routes,RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

//要跳转的页面
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent }from "./user/user.component";

export const routes:Routes=[
    {
        path:'',redirectTo:'login',pathMatch:'prefix'
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'todo',component:TodoComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'user/:param',
        component:UserComponent
    }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);