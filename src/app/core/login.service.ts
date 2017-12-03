import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  
  doLogin(username: string, password: string): boolean{
    if(username === 'admin'){
      return true;
    }    
    return false;
  }

}
