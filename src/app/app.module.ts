import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './Home/firstpage/firstpage.component';
import { LoginComponent } from './Home/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './Admin/interfaces-admin/sidebar/sidebar.component';
import { CategorieComponent } from './Admin/interfaces-admin/categorie/categorie.component';
import { ClientComponent } from './Admin/interfaces-admin/client/client.component';
import { PanierComponent } from './Home/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    LoginComponent,
    LoginAdminComponent,
    SidebarComponent,
    CategorieComponent,
    ClientComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
