import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { AuthGuard } from './services/auth-guard.service';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WhoComponent } from './who/who.component';
import { WhyComponent } from './why/why.component';
const routes: Routes = [
  
   
    
  { path: 'login', component: LoginComponent,
    
},
{ path: 'home', component: HomeComponent,
    
},
{ path: 'signup', component: SignupComponent,
    
},
{ path: 'login/signup', component: SignupComponent,
    
},
{ path: 'why', component: WhyComponent,
    
},
{ path: 'who', component: WhoComponent,
    
},


{
  path: '', component: HomeComponent,
  children: [
    {path: 'home/contact', component :ContactComponent},
  ]
}
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
