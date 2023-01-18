import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularouter';

  navbarOpts = [
    { path: '/home', name: 'Home'},
    { path: '/users', name: 'Users'},
  ];
}


