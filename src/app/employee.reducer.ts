import {ActionEx, EmployeeActionTypes} from './employee.actions';
export const initialState = [];
export function EmployeeReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case EmployeeActionTypes.Add:
      return [...state, action.payload];
    case EmployeeActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
