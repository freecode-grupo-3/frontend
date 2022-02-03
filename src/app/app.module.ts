import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterNeedsComponent } from './register-needs/register-needs.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { UserInterceptor } from './interceptor/user.interceptor';
import { AddReferenceComponent } from './add-reference/add-reference.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterNeedsComponent,
    LoginComponent,
    FeedComponent,
    AddReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
