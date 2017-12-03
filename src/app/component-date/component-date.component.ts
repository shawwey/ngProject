import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-date',
  templateUrl: './component-date.component.html',
  styleUrls: ['./component-date.component.css']
})
export class ComponentDateComponent implements OnInit {

  constructor() { }

  //当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit之前
  ngOnChanges() {
    console.log("1");
    this.outPut("ngOnChanges");
  }
  //在第一轮ngOnChanges完成之后调用。
  ngOnInit() {
    console.log("2");
    this.outPut("ngOnInit");
  }
  //在每个Angular变更检测周期中调用。
  ngDoCheck() {
    console.log("3");
    this.outPut("ngDoCheck");    
  }
  //当把内容投影进组件之后调用。
  ngAfterContentInit() {
    console.log("4");
    this.outPut("ngAfterContentInit");
    
  }
  //每次完成被投影组件内容的变更检测之后调用。
  ngAfterContentChecked() {
    console.log("5");
    this.outPut("ngAfterContentChecked");
    
  }
  //初始化完组件及其子视图之后调用。
  ngAfterViewInit() {
    console.log("6");
    this.outPut("ngAfterViewInit");
    
  }
  //每次做完组件视图和子视图的变更检测之后调用。
  ngAfterViewChecked() {
    console.log("7");
    this.outPut("ngAfterViewChecked");
    
  }
  //当Angular每次销毁指令/组件之前调用。
  ngOnDestroy() {
    console.log("8");
    this.outPut("ngOnDestroy");
 }


 outPut(value){
   console.log(value);
 }



}
