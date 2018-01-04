import { Routes } from '@angular/router'
import { HomeCustomerComponent } from './../customer/home.customer.component'
import { RegisterComponent } from './../customer/register.customer.component'
import { LoginCustomerComponent } from './../customer/login.customer.component'

export const appRoutes: Routes = [
    { path: 'login', component: LoginCustomerComponent },
    { path: 'customers', component: HomeCustomerComponent },
    { path: 'customers/register', component: RegisterComponent },
    { path: 'customers/edit/:id', component: RegisterComponent },
    { path: '', redirectTo: '/customers', pathMatch: 'full' }
]