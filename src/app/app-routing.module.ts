import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { AuthGuard } from './services/auth-guard.service';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { SupervisorBoardComponent } from './supervisor-board/supervisor-board.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ModifyUserAdminComponent } from './modify-user-admin/modify-user-admin.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';
import { CareerComponent } from './career/career.component';
import { ViewCondidateComponent } from './view-condidate/view-condidate.component';
import { ModifyCondidateComponent } from './modify-condidate/modify-condidate.component';
import { DeclareFiscalityComponent } from './declare-fiscality/declare-fiscality.component';

const routes: Routes = [
  
   
    
  { path: 'login', component: LoginComponent,
    
},
{ path: 'profil', component: ProfilComponent,
    
},
{ path: 'declare-fiscality', component:DeclareFiscalityComponent,
    
},
{ path: 'modify-user/:id', component: ModifyUserComponent,
    
},
{ path: 'modify-condidate/:id', component: ModifyCondidateComponent,
    
},
{ path: 'modify-user-admin/:id', component: ModifyUserAdminComponent,
    
},
{ path: 'view-user/:id', component: ViewUserComponent},
{ path: 'view-condidate/:id', component: ViewCondidateComponent},
{ path: 'verify-email/:token', component: VerifyEmailComponent},
{ path: 'reset-password/:token', component: ResetPasswordComponent},
{ path: 'admin-board', component: AdminBoardComponent,
    
},
{ path: 'user-board', component: UserBoardComponent,
    
},
{ path: 'career', component: CareerComponent,
    
},
{ path: 'supervisor-board', component: SupervisorBoardComponent,
    
},

  {path: 'home/contact', component :ContactComponent},
  {path: 'home', component :HomeComponent},
    

{ path: 'signup', component: SignupComponent,
    
},
{ path: 'login/signup', component: SignupComponent,
    
},
{ path: 'login/forgot-password', component: ForgotPasswordComponent,
    
},
{ path: 'admin-board/profil', component: ProfilComponent,
    
},
{ path: 'why', component: WhyComponent,
    
},
{ path: 'who', component: WhoComponent,
    
},
{ path: 'coming-soon', component: ComingSoonPageComponent,
    
},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
  
  { path: '**', redirectTo: '/coming-soon' },
  

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
