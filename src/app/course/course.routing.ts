import { Routes } from '@angular/router';
import { ParamedicalComponent } from './paramedical/paramedical.component';
import { ScienceComponent } from './science/science.component';

export const CourseRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'science',
        component: ScienceComponent
    },
    {
        path: 'para',
        component: ParamedicalComponent
    }
    ]
}];
