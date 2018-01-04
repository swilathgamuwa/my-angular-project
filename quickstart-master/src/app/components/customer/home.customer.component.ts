import { Component, OnInit } from '@angular/core'
import { CustomerModel } from './../../models/customer.model'
import { CustomerService } from './../services/customer.service'
import { ColumnPipe, RowPipe, SearchPipe } from './../common/search.pipe'

@Component({
    selector: 'home-customer',
    templateUrl: './../../templates/customer/home.customer.html',
    styles: [`
        .home-search{
            width: 30%;
        }
    `]
})

export class HomeCustomerComponent implements OnInit {
    customers: CustomerModel[]

    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
        this.customerService.getUser().subscribe(data => this.customers = data);
    }
}