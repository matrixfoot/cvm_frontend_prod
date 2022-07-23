import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { SupervisorBoardComponent } from './supervisor-board/supervisor-board.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ModifyUserAdminComponent } from './modify-user-admin/modify-user-admin.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CareerComponent } from './career/career.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';


@NgModule({
  declarations: [
    AppComponent,
   
    
    
    HeaderComponent,
   
    LoginComponent,
    SignupComponent,
   
    FooterComponent,
    HomeComponent,
    WhoComponent,
    WhyComponent,
    ContactComponent,
    ProfilComponent,
    AdminBoardComponent,
    UserBoardComponent,
    SupervisorBoardComponent,
    ModifyUserComponent,
    ViewUserComponent,
    ModifyUserAdminComponent,
    ServicesComponentComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CareerComponent,
    ComingSoonPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
