import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {UserProfileComponent} from './user-profile/user-profile.component'
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import {ClientrecordComponent} from './clientrecord/clientrecord.component';
import {AddclientComponent} from './addclient/addclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from './guards/auth.guard';   
import { LogoutComponent } from './logout/logout.component'

export const appRoutes: Routes = [
    
        {
            path: 'signup', component: UserComponent,
            children: [{ path: '', component: SignUpComponent }]
        },
        {
            path: 'login', component: UserComponent,
            children: [{ path: '', component: SignInComponent }]
        },
        {
            path: 'userprofile', component: UserProfileComponent,canActivate : [AuthGuard]
        },
        {
            path: 'dash', component: DashComponent,canActivate : [AuthGuard]
        },
        {
            path: 'dashboard', component: DashboardComponent
        },
        {
            path: 'clientrecord', component: ClientrecordComponent
        },
        {
            path: 'logout', component: LogoutComponent
        },
        {
            path: 'addclient/:id', component: AddclientComponent
        },
      
       
        {
            path: '', redirectTo: '/login', pathMatch: 'full'
        }
      
];