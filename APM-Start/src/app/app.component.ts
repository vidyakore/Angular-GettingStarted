import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',    //pm stands for product management
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: 
  `<nav class='nabar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'> {{pageTitle}} </a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
    </nav>
    <div class='container'>
    <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
