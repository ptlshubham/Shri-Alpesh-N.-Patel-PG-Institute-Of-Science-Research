import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseRoutes } from './course.routing';
import { HomeModule } from '../home/home.module';
import { ScienceComponent } from './science/science.component';
import { ParamedicalComponent } from './paramedical/paramedical.component';



@NgModule({
  declarations: [
    ScienceComponent,
    ParamedicalComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    RouterModule.forChild(CourseRoutes)
  ]
})
export class CourseModule { }
