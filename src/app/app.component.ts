import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Terminal Definition Management';
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
  },
  {    
    label: 'Display Terminal',
    path: './findbyterminalCode',
    index: 3
  }
  // {    
  //   label: 'Display Terminal',
  //   path: './tdm',
  //   index: 3
  // }
];
  constructor() { }
  ngOnInit() {
  }

}

