import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
template:`
<app-home></app-home>
<app-login></app-login>
<app-register></app-register>
<app-forgot-password></app-forgot-password>



`
 
})
export class AppComponent {
  title = 'cwh-todo-list';
}


// template:`
//<app-login></app-login>
// <app-home></app-home>


//`
