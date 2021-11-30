import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from './components/login/admin/admin.component';
import { UserComponent } from './components/login/user/user.component';
import { CreateComponent } from './components/login/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProfileComponent } from './components/login/admin-profile/admin-profile.component';

const appRoute : Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path: "login",
    component: LoginComponent
  },{
    path:"admin",
    component: AdminComponent
    
  },{
    path:"user",
    component: UserComponent
  },{
    path:"create",
    component: CreateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
