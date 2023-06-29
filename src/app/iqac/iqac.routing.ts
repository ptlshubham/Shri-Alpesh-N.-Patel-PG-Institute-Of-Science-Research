import { Routes } from '@angular/router';
import { NaccComponent } from './nacc/nacc.component';

export const IqacRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'naac',
        component: NaccComponent
    }
    ]
}];
