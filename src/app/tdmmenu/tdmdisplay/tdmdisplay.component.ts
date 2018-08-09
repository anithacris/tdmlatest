import { Component, OnInit } from '@angular/core';
import { Tdm } from '../../model/tdm';
import {CommonService} from '../../services/common.service'
import { Router } from '@angular/router';
//import { TdmDisplay} from '../../tdmmenu/tdmdisplay/tdmdisplay.component';



@Component({
  selector: 'app-tdmdisplay',
  templateUrl: './tdmdisplay.component.html',
  styleUrls: ['./tdmdisplay.component.css']
})
export class TdmdisplayComponent implements OnInit {
  //id: any;
  terminalCode:string;
  
tdms:Tdm[];


  constructor(private CommonService: CommonService) {}

  ngOnInit() {
    this.terminalCode = "";
  }
 
  private searchTdms() {
    console.info("entered into insert {}"+this.terminalCode);
    this.CommonService.getTdmsByTerminalCode(this.terminalCode).then(tdms => this.tdms = tdms);
    //.subscribe(tdms => this.tdms = tdms);
  }
 
  onSubmit() {
   console.info("entered value {}"+this.terminalCode);
// this.searchTdms().subscribe(tdms=>this.tdms=tdms);
this.searchTdms();
   console.info("string resul"+this.tdms);
   }
//  onSubmit():void{
//    this.CommonService.getTdmsByTerminalCode(this.terminalCode).then(tdms => this.tdms = this.tdms);
//   }
 
 
}




 
  
