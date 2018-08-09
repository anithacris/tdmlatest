import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TdmaddComponent } from '../tdmmenu/tdmadd/tdmadd.component';
import { TdmdisplayComponent } from '../tdmmenu/tdmdisplay/tdmdisplay.component';
import { Tdm } from '../model/tdm';
@Injectable()
export class CommonService {
 //private tdmUrl = 'http://localhost:8080/jpa-postgresql-angular4/';
//private tdmUrl ='jpa-postgresql-angular4/api/Tdm';
  //private tdmUrl = '/api/';  // URL to web API
private  tdmUrl='tdm';
private headers= new Headers({'Content-Type':'application/json'})
  constructor(private http: Http) {
 }
//get all tdms
 getTdms(): Promise<Tdm[]> {
     return this.http.get(this.tdmUrl)
       .toPromise()
       .then(response => response.json() as Tdm[])
       .catch(this.handleError);
   }

   getTdmsByTerminalCode(terminalCode: string):Promise<Tdm[]>{
    console.info("entered in servicec {}"+terminalCode);
    const url = `/findbyterminalCode/${terminalCode}`;
    console.info("entered url value {}"+url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Tdm[])
      .catch(this.handleError);
      //console.info("tdm Detail"+Tdm.toString());
}
 
 
  create(tdm: Tdm): Promise<TdmaddComponent> {
    return this.http
      .post("postcustomer", JSON.stringify(tdm), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as TdmaddComponent)
      .catch(this.handleError);
  }
 
  delete(id: number): Promise<void> {
    const url = `${this.tdmUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}