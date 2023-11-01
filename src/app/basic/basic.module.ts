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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from './research/research.component';



@NgModule({
  declarations: [
    AboutComponent,
    CommitteeComponent,
    ContactComponent,
    TrustComponent,
    InfrastructureComponent,
    ActivityComponent,
    PlacementComponent,
    ResearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BasicRoutes),
    HomeModule,
    NgbDropdownModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CarouselModule

  ]
})
export class BasicModule { }
