import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatCheckbox } from '@angular/material';
////import { CommonService } from '. src/app/services/common.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})

export class TokenComponent implements OnInit {
  lfClassCode:string;
  subtitle1;
  lfConcCode:string;
  idType:string;
  operationId:string;
  seriesYes:string;
  dispConcCode=false;
  dispClassCode=true;
  lfForm : FormGroup;


  IDTypes= [ {value:'Metal Token',viewValue:'Metal Token'},
            {value:'Passes'     ,viewValue:'Passes'},
            {value:'Bpt'     ,viewValue:'Bpt'},
            {value:'Eft'     ,viewValue:'Eft'},
            {value:'Vouchers'     ,viewValue:'Vouchers'},
            {value:'Ticket Rolls' ,viewValue:'Ticket Rolls'}
          ];
  concCodes=[
    {value:'GOPASS',viewValue:'GOPASS'},
    {value:'SVPASS',viewValue:'SVPASS'},
    {value:'DTPASS',viewValue:'DTPASS'}
  
  ];
  classCodes=[
    {value:'1A',viewValue:'1A'},
    {value:'2A',viewValue:'2A'},
    {value:'3A',viewValue:'3A'},
    {value:'SL',viewValue:'SL'}
    
  ];



 // constructor(private commonservice :CommonService,private fb:FormBuilder) {
    constructor(private fb:FormBuilder) {

    this.lfForm = fb.group({
        'idType' : '',
        'lfConcCode':'',
        'lfClassCode':'',
        'seriesYes':'',
        'seriesStart': '',
        'seriesEnd':'',
        'RefLtr':'',
        'IssuingAuthority':''
    });
  }
  //concCodeSelection(event){
    
    //this.lfConcCode = event;
    
   // this.commonservice.setConcCode(event);

    //console.log(this.lfConcCode);
    // console.log("%s",this.lfConcCode);
   //}      
   setIdType(event) {
     this.idType = event.value;
     console.log(this.idType);
     if(this.idType == "Metal Token" || this.idType == "Passes") {
        this.dispConcCode=true;
     }  
     else
        this.dispConcCode=false;
   }  

   classCodeSelection(event){
    
    //this.lfConcCode = event;
    
   // this.commonservice.setConcCode(event);

    console.log(this.lfClassCode);
    // console.log("%s",this.lfConcCode);
   }      
   concCodeSelection(event) {
    console.log(this.lfConcCode);
     this.lfClassCode = event.value;
     console.log(this.lfClassCode);
     if(this.lfClassCode == "DTPASS" ){
        this.dispClassCode=true;
     }  
     else
        this.dispClassCode=false;
   }  

   seriesSelection(event) {
    this.seriesYes = event.value;
    console.log(this.seriesYes);
  }  

   setOperation(event:any){
     this.operationId = event.value;
     console.log(event.value);
   }
  onSubmit() {}
  ngOnInit(){}
}
