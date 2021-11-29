import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UserserviceService } from './services/userservice.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
const appRoutes : Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'users',
    component: UsersComponent,
    children : [
      {
        path:'',
        component: UsersListComponent
      },
      {
        path: 'add',
        component: UsersAddComponent
      },
      {
        path: ':id',
        component: UsersEditComponent
      }
    ]
  },{
    path: '',
    component: HomeComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
