import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public router:Router,public acitveRouter:ActivatedRoute) { }

  ngOnInit() {
    
    this.acitveRouter.params.subscribe(
      params =>{console.log(params)}
    );
  }

}
