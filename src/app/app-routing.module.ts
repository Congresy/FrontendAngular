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
} from './components/conferencia/conferencia.component';
import {
    UserComponent,
    ProfileComponent
} from './user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EventFormComponent } from './components/event/form/event-form.component';
import { ConferenciaFormComponent } from './components/conferencia/form/conferencia-form.component';
import { EventDisplayComponent } from './components/event/event-display/event-display.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post/post-form/post-form.component';
import { AdministratorActorsComponent } from './components/administration/administrator-actors/administrator-actors.component';
import { AdminComponent } from './components/administration/admin/admin.component';

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
        path: 'conferencia-form',
        component: ConferenciaFormComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'conferencia-edit/:id',
        component: ConferenciaFormComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'event/:id',
        component: EventDisplayComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'event-create',
        component: EventFormComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'event-create/:id',
        component: EventFormComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'event-edit/:id',
        component: EventFormComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'post-list',
        component: PostComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'post-edit/:id',
        component: PostFormComponent,
        canActivate: [AuthGuardService]
    }, {
        path: 'administrator',
        component: AdminComponent,
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
