import { Component, OnInit } from '@angular/core';
import {DriversService} from '../drivers/drivers.service';
import {Driver} from '../shared/driver.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  driver;
  validMap = false;
  validLocation = true;
  constructor(private driversService: DriversService) { }

  ngOnInit() {
    this.driversService.driver.subscribe( driver => {
      if (driver !== 'none') {
      this.driver = driver;
      this.validMap = true;
        this.validLocation = true;
    } else {
        this.validLocation = false;
      }
    });
  }

  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
  }

  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
  }

}
