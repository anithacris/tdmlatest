import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [{
    label: 'Create Terminal',
    path: './tdmadd',
    index: 0
  },
  {
    label: 'Modify Terminal',
    path: './tdmmodify',
    index: 1
  },{
    label: 'Delete Terminal',
    path: './tdmdelete',
    index: 2
  }];
  constructor() { }
  ngOnInit() {
  }

}

