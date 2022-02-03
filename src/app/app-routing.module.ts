import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReferenceComponent } from './add-reference/add-reference.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegisterNeedsComponent } from './register-needs/register-needs.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'needs', component: RegisterNeedsComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'add-reference', component: AddReferenceComponent},
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
