import { Component, OnInit } from '@angular/core'
import { CustomerModel } from './../../models/customer.model'
import { CustomerService } from './../services/customer.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: '',
    templateUrl: './../../templates/customer/login.customer.html',
    styleUrls: [
        './../../css/common/login.css'
    ],
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

export class LoginCustomerComponent implements OnInit {
    customerId: number
    customer: CustomerModel[]

    constructor(private customerService: CustomerService, private route: ActivatedRoute){

    }

    loginUser(formValues?: any) {
        if (formValues != undefined) {            
            this.customerService.getUserByUsername(formValues.userName).subscribe(data => this.customer = data);
            console.log(this.customer)
        }
    }

    ngOnInit(){

    }
}