import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Injectable()
export class EmployeeService {
    private _url: string = "/assets/data/employees.json";

    constructor(private http:HttpClient) {

    }

    getEmployee() {
        return ajax(this._url);
    }
}