import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { MoreRoutes } from './more.routing';
import { SharedModule } from '../shared/shared.module';
import { LibraryComponent } from './library/library.component';
import { ResultComponent } from './result/result.component';
import { CampusComponent } from './campus/campus.component';
import { SearchComponent } from './search/search.component';
import { PaperComponent } from './paper/paper.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { NewsComponent } from './news/news.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';



@NgModule({
  declarations: [
    LibraryComponent,
    ResultComponent,
    CampusComponent,
    SearchComponent,
    PaperComponent,
    SyllabusComponent,
    NewsComponent,
    MagazineComponent,
    AcademicCalendarComponent,
    ScholarshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    HomeModule,
    SharedModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class MoreModule { }
