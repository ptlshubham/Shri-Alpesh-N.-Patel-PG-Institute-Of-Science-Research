import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { CommitteeComponent } from './committee/committee.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { TrustComponent } from './trust/trust.component';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from './research/research.component';
import { CampusLifeComponent } from './campus-life/campus-life.component';


export const BasicRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'infrastructure',
        component: InfrastructureComponent
    },
    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'trust',
        component: TrustComponent
    },
    {
        path: 'committee',
        component: CommitteeComponent
    },
    {
        path: 'placement',
        component: PlacementComponent
    },
    {
        path: 'research',
        component: ResearchComponent
    },
    {
        path: 'campus-life',
        component: CampusLifeComponent
    },
    ]
}];
