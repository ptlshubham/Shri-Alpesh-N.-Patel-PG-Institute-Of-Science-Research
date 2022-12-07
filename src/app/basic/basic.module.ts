import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { ContactComponent } from './contact/contact.component';
import { TrustComponent } from './trust/trust.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BasicRoutes } from './basic.routing';
import { HomeModule } from '../home/home.module';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [
    AboutComponent,
    CommitteeComponent,
    ContactComponent,
    TrustComponent,
    InfrastructureComponent,
    ActivityComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BasicRoutes),
    HomeModule

  ]
})
export class BasicModule { }
