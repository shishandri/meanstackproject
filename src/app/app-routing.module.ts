import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { AuthGuard } from './guards/auth.guard';
// import { AddclientComponent } from './addclient/addclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  // {
  //     path: 'signup', component: UserComponent,
  //     children: [{ path: '', component: SignUpComponent }]
  // },
  // {
  //     path: 'login', component: UserComponent,
  //     children: [{ path: '', component: SignInComponent }]
  // },

  // {
  //   path: 'addclient', component: AddclientComponent,
  //  },
   
  {
    path: 'dashboard', component: DashboardComponent
  },

  // {
  //     path: 'userprofile', component: UserProfileComponent,canActivate : [AuthGuard]
  // },

  // {
  //     path: '', redirectTo: '/login', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
