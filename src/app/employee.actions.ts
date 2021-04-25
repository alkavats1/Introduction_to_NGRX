import {Action} from '@ngrx/store';
export enum EmployeeActionTypes {
  Add = '[Employee Component] Add',
  Remove = '[Employee Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class EmployeeAdd implements ActionEx {
  readonly type = EmployeeActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class EmployeeRemove implements ActionEx {
  readonly type = EmployeeActionTypes.Remove;
  constructor(public payload: any) {
  }
}
