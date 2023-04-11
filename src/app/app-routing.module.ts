import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import {LoginAdminComponent} from "./Admin/login-admin/login-admin.component";

const routes: Routes = [
  {path :"login", component :LoginComponent},
  {path :"admin", component :LoginAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
