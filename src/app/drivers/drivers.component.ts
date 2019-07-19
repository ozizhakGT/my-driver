import { Component, OnInit } from '@angular/core';
import {DriversService} from './drivers.service';
import {Driver} from '../shared/driver.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Driver[];
  constructor(private driverService: DriversService, private router: Router) { }

  ngOnInit() {
    this.driverService.getDrivers().subscribe((drivers: Driver[]) => {
      this.drivers = drivers;
      this.router.navigate([this.drivers[0].name]);
    });
  }

  // Call service for deleting driver
  onDelete(i) {
    this.driverService.deleteDriver(i, this.drivers);
  }

}
