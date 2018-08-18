import { Component, OnInit } from '@angular/core';
import { Tdm } from '../../model/tdm';
import {CommonService} from '../../services/common.service'
import { Router } from '@angular/router';
//import { TdmDisplay} from '../../tdmmenu/tdmdisplay/tdmdisplay.component';



@Component({
  selector: 'tdmdisplay',
  templateUrl: './tdmdisplay.component.html',
  styleUrls: ['./tdmdisplay.component.css']
})
export class TdmdisplayComponent implements OnInit {
  navLinks = [{
    label: 'Terminal Wise',
    path: './tdmdetailter',
    index: 0
  },
  
  {
    label: 'Booking Wise',
    path: './tdmdetail',
    index: 1
  },{
    label: 'Appl Trml Type wise',
    path: './tdmdetail',
    index: 2
  },{
    label: 'Access Type wise',
    path: './tdmdetail',
    index: 3
  },
  {
    label: 'Division Wise',
    path: './tdmdetail',
    index: 4
  },
  {
    label: 'Zone wise',
    path: './tdmdetail',
    index: 5
  }
  ,{
    label: 'Deleted',
    path: './tdmdetail',
    index: 6
  }
  ,{
    label: 'Pos Terminals',
    path: './tdmdetail',
    index: 7
  }
  ,{
    label: 'Display All',
    path: './tdmdetail',
    index: 8
  }
  ,{
    label: 'Terminal Log Report',
    path: './tdmdetail',
    index: 9
  }
  ,{
    label: 'Terminal Type',
    path: './tdmdetail',
    index: 10
  }
  ,{
    label: 'Server Type',
    path: './tdmdetail',
    index: 11
  }
];
  ngOnInit() {
  }

}

