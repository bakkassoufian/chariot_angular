import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './Home/firstpage/firstpage.component';
import { LoginComponent } from './Home/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    LoginComponent,
    LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
