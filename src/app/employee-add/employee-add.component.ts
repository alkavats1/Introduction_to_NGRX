import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';
import {EmployeeAdd} from '../employee.actions';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employee: Observable<Employee[]>;
  constructor(private store: Store<{ employee: Employee[] }>) {
    this.employee = store.pipe(select('employee'));
  }
  AddEmployee(employeeName: string): void {
    const employee = new Employee();
    employee.name = employeeName;
    this.store.dispatch(new EmployeeAdd(employee));
  }
}
