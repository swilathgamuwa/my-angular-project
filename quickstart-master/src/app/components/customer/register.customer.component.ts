import { Component, OnInit, Input } from '@angular/core'
import { CustomerModel } from './../../models/customer.model'
import { CustomerService } from './../services/customer.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'register-customer',
    templateUrl: './../../templates/customer/register.customer.html',
    styles: [
        `
        .reg-wrapper{
            margin: 0 auto;
            width: 50%
        }
        .pointer {
            cursor: pointer;
        }
        `
    ]
})

export class RegisterComponent implements OnInit {
    customerId: number
    customer: CustomerModel[]

    constructor(private customerService: CustomerService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        if(this.route.snapshot.params['id'] != undefined)
            this.customerService.getUserById(+this.route.snapshot.params['id']).subscribe(data => this.customer = data);
    }
}