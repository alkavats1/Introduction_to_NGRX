import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EmployeeReducer } from './employee.reducer';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeViewComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ employee: EmployeeReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
