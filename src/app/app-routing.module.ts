import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TdmaddComponent } from './tdmmenu/tdmadd/tdmadd.component';
import { TdmmodifyComponent } from './tdmmenu/tdmmodify/tdmmodify.component';
import { TdmdisplayComponent } from './tdmmenu/tdmdisplay/tdmdisplay.component';
import { TdmDetailsComponent } from './tdmmenu/tdm-details/tdm-details.component';
import { TdmdetailterComponent } from './tdmmenu/tdmdisplay/tdmdetailter/tdmdetailter.component';
const routes: Routes = [
  { path: '', redirectTo: 'app',pathMatch: 'full' },
  //{ path: 'app', component: AppComponent},
  { path: 'tdmadd', component: TdmaddComponent},
  { path: 'tdmmodify', component: TdmmodifyComponent},
  //{ path: 'findbyterminalCode', component: TdmdetailterComponent},
  //{ path: 'tdm', component: TdmDetailsComponent},
  {  path: 'tdmdisplay', component: TdmdisplayComponent,
children: [
  
 { path: 'tdmdetailter', component: TdmdetailterComponent},
 //{ path: 'findbyterminalCode', component: TdmdetailterComponent},
 ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
