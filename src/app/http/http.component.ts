import { Component, OnInit } from '@angular/core';
//import { EmployeeService } from './employee.service';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  public employees = [];

  constructor() { }

  ngOnInit() {
    const apiData = ajax("/assets/data/employees.json");

    apiData.subscribe(data => {
      debugger;
      console.log(data.response);
    });
  }

}
