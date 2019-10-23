import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * Import the Prime Ng modules path 
 */
import { PrimeNgModule } from './core/prime-ng/prime-ng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CarosualComponent } from './core/carosual/carosual.component';
import { HomeComponent } from './home/home.component';
import { MakeclaimComponent } from './makeclaim/makeclaim.component';
import { TableComponent } from './core/table/table.component';
import { ApproverComponent } from './approver/approver.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CarosualComponent,
    HomeComponent,
    MakeclaimComponent,
    TableComponent,
    ApproverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
