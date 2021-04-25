import {Component} from '@angular/core';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {EmployeeRemove} from '../employee.actions';
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  employee: Observable<Employee[]>;
  constructor(private store: Store<{ employee: Employee[] }>) {
    this.employee = store.pipe(select('employee'));
  }

  removeEmployee(employeeIndex) {
    this.store.dispatch(new EmployeeRemove(employeeIndex));
  }

}
