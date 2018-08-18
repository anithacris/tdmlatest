import { Component, OnInit ,ViewChild } from '@angular/core';
import { Tdm } from '../../../model/tdm';
import {CommonService} from '../../../services/common.service'
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'tdmdetailter',
  templateUrl: './tdmdetailter.component.html',
  styleUrls: ['./tdmdetailter.component.css']
})
export class TdmdetailterComponent implements OnInit {
  displayedColumns: string[] = ['id', 'terminalCode', 'bookingCode', 'windowNo'];
  tdms:Tdm[];
  dataSource = new MatTableDataSource<Tdm>(this.tdms);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //id: any;
  
  terminalCode:string;
  
//tdms:Tdm[];


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
this.dataSource.paginator = this.paginator;
   console.info("string resul"+this.tdms);
   }
//  onSubmit():void{
//    this.CommonService.getTdmsByTerminalCode(this.terminalCode).then(tdms => this.tdms = this.tdms);
//   }
 
 
}
