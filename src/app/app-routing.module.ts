import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ClientrecordComponent} from './clientrecord/clientrecord.component';
import { AddclientComponent } from './addclient/addclient.component';
import { LogoutComponent } from './logout/logout.component'

const routes: Routes = [
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'dashboard', component: DashboardComponent
},
  {
    path: 'addclient', component: AddclientComponent,
},
{
  path: 'userprofile', component: UserProfileComponent,canActivate : [AuthGuard]
},
  {
      path: 'clientrecord', component: ClientrecordComponent,canActivate : [AuthGuard]
  },
  
  {
    path: 'logout', component: LogoutComponent,canActivate : [AuthGuard]
},
  {
      path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
