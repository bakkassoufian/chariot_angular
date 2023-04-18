import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import {LoginAdminComponent} from "./Admin/login-admin/login-admin.component";
import {SidebarComponent} from "./Admin/interfaces-admin/sidebar/sidebar.component";
import {CategorieComponent} from "./Admin/interfaces-admin/categorie/categorie.component";
import {ClientComponent} from "./Admin/interfaces-admin/client/client.component";
import {FirstpageComponent} from "./Home/firstpage/firstpage.component";
import {PanierComponent} from "./Home/panier/panier.component";

const routes: Routes = [
  {path :"**", component :LoginComponent},
  {path :"login", component :LoginComponent},
  {path :"admin", component :LoginAdminComponent},
  {path :"admin/sidebar", component :SidebarComponent},
  {path :"admin/categorie", component :CategorieComponent},
  {path :"admin/client", component :ClientComponent},
  {path :"home", component :FirstpageComponent},
  {path :"panier", component :PanierComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
