import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './components/login/admin/components/admin-profile/admin-profile.component';
import { UserManagementComponent } from './components/login/admin/components/user-management/user-management.component';
import { AdminComponent } from './components/login/admin/admin.component';
import { UserComponent } from './components/login/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/login/create/create.component';
import { EditAccountComponent } from './components/login/admin/components/user-management/components/edit-account/edit-account.component';
import { UserProfileComponent } from './components/login/user/components/user-profile/user-profile.component';
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
    component: AdminComponent,
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      {
        path:'management',
        component:UserManagementComponent,
      },{
        path:'management/:id',
        component:EditAccountComponent
      }
  ]
  },{
    path:"user",
    component: UserComponent,
    children:[{
      path:'profile',
      component: UserProfileComponent
    }]
  },{
    path:"create",
    component: CreateComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
