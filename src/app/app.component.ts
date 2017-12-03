import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  ngOnInit() {
    console.log("This is debug Test");
  }
  title = 'app';
}
