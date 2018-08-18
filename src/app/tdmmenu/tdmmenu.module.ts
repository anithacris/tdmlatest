import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialComponentsModule } from '../my-material-components/my-material-components.module';
import { AppRoutingModule } from '../app-routing.module';
//import { TdmmenuModule } from '../tdmmenu/tdmmenu.module';
//import { TdmmenuComponent } from './tdmmenu/tdmmenu.component';
import { TdmaddComponent } from './tdmadd/tdmadd.component';
import { TdmmodifyComponent } from './tdmmodify/tdmmodify.component';
import { TdmdisplayComponent } from './tdmdisplay/tdmdisplay.component';
import { TdmDetailsComponent } from './tdm-details/tdm-details.component';
import { TdmdetailterComponent } from './tdmdisplay/tdmdetailter/tdmdetailter.component';


@NgModule({
  imports: [
    CommonModule,
    MyMaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [],
  declarations: [TdmaddComponent,TdmmodifyComponent, TdmdisplayComponent, TdmDetailsComponent, TdmdetailterComponent]
})

export class TdmmenuModule { }
