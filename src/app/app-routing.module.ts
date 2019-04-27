import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {
    ConferenciaComponent,
    ConferenciaDetailedComponent,
    CreateConferenciaComponent
} from './components/conferencia/conferencia.component';
import {
    UserComponent,
    ProfileComponent
} from './user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EventFormComponent } from './components/event/form/event-form.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'conferencias',
        component: ConferenciaComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'conferencias/:own',
        component: ConferenciaComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'register',
        component: UserComponent
    },
    {
        path: 'conferencia/:id',
        component: ConferenciaDetailedComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'conferencia-create',
        component: CreateConferenciaComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'event-create',
        component: EventFormComponent,
        canActivate: [AuthGuardService]
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
