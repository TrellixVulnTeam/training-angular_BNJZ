import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/login/admin/admin.component';
import { UserComponent } from './components/login/user/user.component';
import { CreateComponent } from './components/login/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProfileComponent } from './components/login/admin/components/admin-profile/admin-profile.component';
import { UserManagementComponent } from './components/login/admin/components/user-management/user-management.component';
import { EditAccountComponent } from './components/login/admin/components/user-management/components/edit-account/edit-account.component';
import { UserProfileComponent } from './components/login/user/components/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    AdminProfileComponent,
    UserManagementComponent,
    AdminComponent,
    UserComponent,
    EditAccountComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
