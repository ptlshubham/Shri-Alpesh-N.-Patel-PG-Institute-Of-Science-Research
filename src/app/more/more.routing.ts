import { Routes } from '@angular/router';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { CampusComponent } from './campus/campus.component';
import { LibraryComponent } from './library/library.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ResultComponent } from './result/result.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { SearchComponent } from './search/search.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'library',
            component: LibraryComponent
        },
        {
            path: 'paper',
            component: PaperComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path: 'search/:id',
            component: SearchComponent
        },
        {
            path: 'news',
            component: NewsComponent
        },
        {
            path: 'magazine',
            component: MagazineComponent
        },
        {
            path: 'academic-calendar',
            component: AcademicCalendarComponent
        },
        {
            path:'scholarship',
            component:ScholarshipComponent
        }

    ]
}];