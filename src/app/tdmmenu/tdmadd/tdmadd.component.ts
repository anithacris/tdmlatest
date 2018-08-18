import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,FormControl,Validators} from '@angular/forms';
import { Tdm } from '../../model/tdm';
import { CommonService } from '../../services/common.service';
//import { truncate } from 'fs';
//import { Commonservice } from './app/services/Common.Service';

@Component({
  selector: 'app-tdmadd',
  templateUrl: './tdmadd.component.html',
  styleUrls: ['./tdmadd.component.css']
})
export class TdmaddComponent implements OnInit {
  tdm=new Tdm;
  submitted=false;

  CommonService: any;
  createterminal : FormGroup;
  terminalCode:FormControl;
  bookingCode:FormControl;
  windowNumber:FormControl;
  terminalType:FormControl;
  terminalIp:FormControl;
  posTid:FormControl;
  Bank:FormControl;
  ServiceProvider:FormControl;
  PosVersioncode:FormControl;
  showClassGrp: FormGroup;
  showClassGrpm: FormGroup;
  showClassGrp1: FormGroup;
  uts:FormControl;
  prs:FormControl;
  AppterType:FormControl;
  TermParameter:FormControl;
  TeroperType1:FormControl;
  TeroperType2:FormControl;
  TeroperType3:FormControl;
  TeroperType4:FormControl;
  //MacAddress:FormControl;
  //StationServerID:FormControl;
  check:string;
  utsprs:string;
  test:FormControl;
  value:string;
  MacAddress:"";
  StationServerID:"";
  

  AppTypes= [ {value:'Booking',viewValue:'Booking'},
  {value:'DBA'     ,viewValue:'DBA'},
  {value:'Charting'     ,viewValue:'Charting'},
  {value:'Supervisor'     ,viewValue:'Supervisor'},
  {value:'Manager'     ,viewValue:'Manager'},
  {value:'Rail Manager' ,viewValue:'Rail Manager'},
  {value:'Cash' ,viewValue:'Cash'},
  {value:'Recovery' ,viewValue:'Recovery'},
  {value:'Enquiry' ,viewValue:'Enquiry'},
  {value:'Inward' ,viewValue:'Inward'}
];
TermParams=[ {value:'Character',viewValue:'Character'},
{value:'Overseas'     ,viewValue:'Overseas'},
{value:'CurrentBooking'     ,viewValue:'CurrentBooking'},
{value:'PostOffice'     ,viewValue:'PostOffice'},
{value:'CreditCard'     ,viewValue:'CreditCard'},
{value:'TeleBooking' ,viewValue:'TeleBooking'},
{value:'TravelAgent' ,viewValue:'TravelAgent'},
{value:'BookingAgent' ,viewValue:'BookingAgent'},
{value:'Enquiry' ,viewValue:'Enquiry'},
{value:'GoIndia' ,viewValue:'GoIndia'}
];
OperTypes1=[ {value:'Cash',viewValue:'Cash'},
{value:'NonCash',viewValue:'NonCash'},];
OperTypes2=[ {value:'NonExtended',viewValue:'NonExtended'},
{value:'Extended',viewValue:'Extended'},];
OperTypes3=[ {value:'UTS',viewValue:'UTS'},
{value:'Non-UTS',viewValue:'Non-UTS'},];
OperTypes4=[ {value:'With PRS Printer',viewValue:'With PRS Printer'},
{value:'Without PRS Printer',viewValue:'Without PRS Printer'},];



  constructor( private fb: FormBuilder,private commonService:CommonService) {
    this.terminalCode= new FormControl('', [Validators.required]);
    this.bookingCode= new FormControl('', [Validators.required]);
    this.windowNumber= new FormControl('', [Validators.required]);
    this.terminalType= new FormControl('', [Validators.required]);
    this.terminalIp= new FormControl('', [Validators.required]);
    this.posTid= new FormControl('', [Validators.required]);
    this.Bank= new FormControl('', [Validators.required]);
    this.ServiceProvider= new FormControl('', [Validators.required]);
    this.PosVersioncode= new FormControl('', [Validators.required]);
    this.uts= new FormControl('', [Validators.required]);
    this.prs= new FormControl('', [Validators.required]);
    this.AppterType= new FormControl('', [Validators.required]);
    this.TermParameter= new FormControl('', [Validators.required]);
    this.TeroperType1= new FormControl('', [Validators.required]);
    this.TeroperType2= new FormControl('', [Validators.required]);
    this.TeroperType3= new FormControl('', [Validators.required]);
    this.TeroperType4= new FormControl('', [Validators.required]);
    //this.MacAddress= new FormControl('', [Validators.required]);
    //this.StationServerID= new FormControl('', [Validators.required]);
    this.test=new FormControl('', [Validators.required]);
 
    this.prs= new FormControl('', [Validators.required]);
    this.uts= new FormControl('', [Validators.required]);

    this.createterminal = fb.group({
      terminalCode: this.terminalCode,
      bookingCode:this.bookingCode,
      windowNumber:this.windowNumber,
      terminalType:this.terminalType,
      terminalIp:this.terminalIp,
      posTid:this.posTid,
      Bank:this.Bank,
      ServiceProvider:this.ServiceProvider,
      PosVersioncode:this.PosVersioncode,
      prs:this.prs,
  AppterType:this.AppterType,
  TermParameter:this.TermParams,
  TeroperType1:this.TeroperType1,
  TeroperType2:this.TeroperType2,
  TeroperType3:this.TeroperType3,
  TeroperType4:this.TeroperType4,
  check:this.check,
  utsprs:this.utsprs,
  uts:this.uts,
  MacAddress:this.MacAddress,
  StationServerID:this.StationServerID
});

  }
   //ApplTerminal(event){
    
    //this.lfConcCode = event;
    
    //this.CommonService.ApplTermType(event);

    //console.log(this.AppterType);
    // console.log("%s",this.lfConcCode);
   //}   
   
   
  termSelection(event) {
    // this.seriesYes = event.value;
  console.log(this.check);
   // if(this.test == '1')
    //  this.prs= "PRS";
    //else
    //  this.utsprs = "UTS";  
    if(this.check == '2')
    this.MacAddress="";
    this.StationServerID="";
  }  
  //setform(event){
    //this.prs=event.value;
    //console.log(this.prs);
  //}
  //setform1(event){
    //this.prs=event.value;
    //console.log(this.uts);
  //}

  // Called from template when checkbox value changes    

  ngOnInit() {
    
}
// newTdm():void{
//   this.submitted = false;
//   this.tdm = new Tdm();
// }
// private save():void{
//   this.commonService.create(this.tdm);
// }
// OnSubmit(){
//   this.submitted = true;
//   this.save();
// }

newTdm(terminalcode_val,bookingcode_val,windowno_val,terminaltype_val,terminalip_val,postid_val,bankname_val,serviceprovider_val,posversioncode_val,AppterType,TermParam,TeroperType1,TeroperType2,TeroperType3,TeroperType4,macaddress_val,stationserverid_val){
this.tdm.terminalCode=terminalcode_val;
this.tdm.bookingCode=bookingcode_val;
this.tdm.windowNo=windowno_val;
this.tdm.terminalType=terminaltype_val;
this.tdm.terminalIp=terminalip_val.toString();
this.tdm.posTid=postid_val.toString();
this.tdm.bankName=bankname_val;
this.tdm.serviceProvider=serviceprovider_val;
this.tdm.posVersionCode=posversioncode_val.toString();
this.tdm.appterType=AppterType;

this.tdm.termParameter=TermParam;
this.tdm.termOperType1=TeroperType1;
this.tdm.termOperType2=TeroperType2;
this.tdm.termOperType3=TeroperType3;
this.tdm.termOperType4=TeroperType4;
this.tdm.macAddress=macaddress_val;
this.tdm.stationServerId=stationserverid_val;

console.log("entering into database"+this.tdm.terminalCode);
this.commonService.create(this.tdm);
}

}

