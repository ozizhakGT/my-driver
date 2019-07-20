import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriverComponent} from './drivers/driver/driver.component';
import {DriversComponent} from './drivers/drivers.component';


const routes: Routes = [
  {path: '', component: DriversComponent, pathMatch: 'full'},
  {path: ':driver', children: [
      {path: '', component: DriverComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
