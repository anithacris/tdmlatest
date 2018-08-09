import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
//import { TdmdisplayComponent } from '../tdmdisplay/tdmdisplay.component';
import { Tdm } from '../../model/tdm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdm-details',
  templateUrl: './tdm-details.component.html',
  styleUrls: ['./tdm-details.component.css'],
 
})
export class TdmDetailsComponent implements OnInit{
  
  tdms:Tdm[];

  constructor(private router: Router,private commonService:CommonService) { }
  getTdms(){
    this.commonService.getTdms().then(tdms => this.tdms = tdms);
 }
//  ngOnInit(){
//   this.commonService.getTdms().subscribe(tdms=>{this.tdms=tdms});
// };
ngOnInit(): void {
  this.getTdms();
}

}

   



 

  
 
  
  
  
  

