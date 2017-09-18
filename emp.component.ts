import {Component} from "@angular/core";
import {Employee} from "./employee";
@Component({
    selector:"emp-app",
    templateUrl:"./emp.component.html"
})

export class EmployeeComponent{
    // Property of type employee object

    EmployeeList:Employee[]=[
       { "firstName":"Lucky","LastName":"washi"},
       { "firstName":"Abhi","LastName":"Wadkar"},
       { "firstName":"Rahul","LastName":"Giri"},
       { "firstName":"Siddhi","LastName":"Wani"},
    ]

// Employee array with employee object
employees:Array<Employee>=this.EmployeeList;
}