import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { appRoutes } from './components/common/routes'
import { HomeCustomerComponent } from './components/customer/home.customer.component'
import { NavbarComponent } from './components/common/navbar.component'
import { CustomerService } from './components/services/customer.service'
import {SearchPipe} from './components/common/search.pipe'
import {MainPipe} from './modules/pipe.module'
import {RegisterComponent} from './components/customer/register.customer.component'
import {LoginCustomerComponent} from './components/customer/login.customer.component'


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MainPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomeCustomerComponent,
    NavbarComponent,
    RegisterComponent,
    LoginCustomerComponent
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
