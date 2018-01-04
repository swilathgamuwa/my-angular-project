import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CustomerModel } from './../../models/customer.model'
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CustomerService {

    customerModel: CustomerModel
    private userBase = 'https://jsonplaceholder.typicode.com/users/';

    constructor(private http: Http) {
        this.customerModel = new CustomerModel()
    }

    getUser(): Observable<CustomerModel[]> {
        return this.http.get(this.userBase)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    getUserById(id: number): Observable<CustomerModel[]> {
        return this.http.get(this.userBase + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    getUserByUsername(username: String): Observable<CustomerModel[]> {
        return this.http.get(this.userBase + username)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

}