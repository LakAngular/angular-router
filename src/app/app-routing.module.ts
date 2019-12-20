import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { UsersComponent } from './components/users/users.component';
import { AdminModule } from './admin/admin.module';
import { RegisterComponent } from './components/register/register.component';
import { RegisterReactComponent } from './components/register-react/register-react.component';
import { RegisterFormarrayComponent } from './components/register-formarray/register-formarray.component';
import { RegisterCustomvalidationComponent } from './components/register-customvalidation/register-customvalidation.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/:uid', component: UserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-react', component: RegisterReactComponent},
  {path: 'register-formarray', component: RegisterFormarrayComponent},
  {path: 'register-customvalidation', component: RegisterCustomvalidationComponent},
  {path: 'home', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'home', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path: 'home', loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule) },

  {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
