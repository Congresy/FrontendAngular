import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConferenciaComponent, ConferenciaDetailedComponent, CreateConferenciaComponent } from './conferencia/conferencia.component';
import { UserComponent, ProfileComponent } from './user/user.component';
import { AuthGuardService } from './services/auth-guard.service';

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
      path: 'register',
      component: UserComponent
  },
  {
      path: 'conferencia/:id',
      component: ConferenciaDetailedComponent
  },
  {
      path: 'profile',
      component: ProfileComponent
  },
  {
      path: 'conferencia-create',
      component: CreateConferenciaComponent
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