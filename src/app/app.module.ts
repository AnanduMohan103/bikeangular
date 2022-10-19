import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { ViewbikeComponent } from './viewbike/viewbike.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:NavbarComponent
  },
  {
    path:"add",component:AddbikeComponent
  },
  {
    path:"view",component:ViewbikeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbikeComponent,
    ViewbikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
