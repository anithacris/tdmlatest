import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TdmaddComponent } from './tdmmenu/tdmadd/tdmadd.component';
import { TdmmodifyComponent } from './tdmmenu/tdmmodify/tdmmodify.component';
import { TdmdisplayComponent } from './tdmmenu/tdmdisplay/tdmdisplay.component';
import { TdmDetailsComponent } from './tdmmenu/tdm-details/tdm-details.component'
const routes: Routes = [
  { path: '', redirectTo: 'app',pathMatch: 'full' },
  //{ path: 'app', component: AppComponent},
  { path: 'tdmadd', component: TdmaddComponent},
  { path: 'tdmmodify', component: TdmmodifyComponent},
  { path: 'findbyterminalCode', component: TdmdisplayComponent},
  { path: 'tdm', component: TdmDetailsComponent},
  
 //children: [
 //{ path: '', redirectTo: '/tdmadd', pathMatch: 'full'},
  // { path: 'tdmadd', component: TdmaddComponent},
 //]
//}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
