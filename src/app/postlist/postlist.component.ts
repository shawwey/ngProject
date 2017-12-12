import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
	public itemsPerPage:number=5;
	public totalRecords:number=11;
	public currentPage:number=1;
	public offset:number=0;
	public end:number=0;

	public searchText:string;
	public searchTextStream:Subject<string> = new Subject<string>();
    constructor() { 
    console.log("------这里开始对比Promise和Observable，这块代码是为了学习Observable使用的------"); 
        //以下是Promise的写法
        let promise = new Promise(resolve => {
            setTimeout(() => {
                resolve('---promise timeout---');
            }, 2000);
        });
        promise.then(value => console.log(value));
    
        // //以下是Observable的写法RxJs
        let stream1$ = new Observable(observer => {
            let timeout = setTimeout(() => {
                observer.next('observable timeout');
            }, 2000);
    
            return () => {
                clearTimeout(timeout);
            }
        });
        let disposable = stream1$.subscribe(value => console.log(value));
    
        // //【第一个核心不同点来了】：Observable是可以中途取消的，而Promise一旦触发就不能取消了
        setTimeout(() => {
            disposable.unsubscribe();
        }, 1000);
    
        // //【第二个核心不同点来了】：Observable可以持续发射很多值，而Promise只能发射一个值就结束了
        let stream2$ = new Observable<number>(observer => {
            let count = 0;
            let interval = setInterval(() => {
                observer.next(count++);
            }, 1000);
    
            return () => {
                clearInterval(interval);
            }
        });
        stream2$.subscribe(value => console.log("Observable>"+value));
    
        //【第三个核心不同点来了】：Observable提供了很多的工具函数，最最最常用的filter和map演示如下
        stream2$.filter(val=>val%2==0)
          .subscribe(value => console.log("filter>"+value));
    
        stream2$.map(value => value * value)
          .subscribe(value => console.log("map>"+value));
    
        console.log("------------------------------------------------");
  }

  ngOnInit() {
  }

}
