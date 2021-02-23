import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
// import { UserService } from './shared/user.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
// import { AuthGuard } from './guards/auth.guard';   
// import { AuthInterceptor } from './guards/auth.interceptor';
// import { ClientrecordComponent } from './clientrecord/clientrecord.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { AddclientComponent } from './addclient/addclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    // SignUpComponent,
    // UserProfileComponent,
    // SignInComponent,
    // ClientrecordComponent,
    // AddclientComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  //AuthGuard
  // UserService
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
