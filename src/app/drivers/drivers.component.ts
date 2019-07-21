import { Component, OnInit } from '@angular/core';
import {DriversService} from './drivers.service';
import {Driver} from '../shared/driver.interface';
import {Router} from '@angular/router';
import {EditModalComponent} from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Driver[];
  constructor(private driverService: DriversService, private router: Router) { }

  ngOnInit() {
    /*
    * Getting drivers Data first thing on component loading
    * adding first driver name to url route
    * sending first driver location Subject to Map Component
    * */
    this.driverService.getDrivers().subscribe((drivers: Driver[]) => {
      this.drivers = drivers;
      this.router.navigate([this.drivers[0].name]);
      this.driverService.driver.next(this.drivers[0]);
    });
  }

  /*
  * By method type call service for spesific action
  * */
  onActionSelect(method, i) {
    switch (method) {
      case 'delete':
        this.driverService.deleteDriver(i, this.drivers);
        break;
      case 'edit':
        this.driverService.onOpenEditAction(EditModalComponent, this.drivers[i]);
        this.driverService.editModal.afterClosed().subscribe(result => {
          this.drivers[i] = Object.assign(this.drivers[i], result);
        });
    }
  }

  // Update driverLocation Subject by select driver
  onSelect(driver) {
    this.driverService.driver.next(driver);
  }

}
