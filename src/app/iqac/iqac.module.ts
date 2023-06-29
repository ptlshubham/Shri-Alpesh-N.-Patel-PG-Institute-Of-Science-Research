import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaccComponent } from './nacc/nacc.component';
import { RouterModule } from '@angular/router';
import { IqacRoutes } from './iqac.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NaccComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(IqacRoutes)
  ]
})
export class IqacModule { }
