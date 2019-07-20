import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  baseUrl = 'http://localhost:8080/assets';
  driverLocation = new Subject();

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) { }

  // get all drivers from server
  getDrivers() {
    return this.http.get(`${this.baseUrl}/drivers.json`);
  }

  /*
  * confirm message before deleting
  * if true delete from drivers Array
  * navigate url one route back
  * */
  deleteDriver(i, drivers) {
    if(confirm(`are you sur eyou want Deleting ${drivers[i].name}?`)) {
      drivers.splice(i, 1).slice();
      this.driverLocation.next('none');
      this.router.navigate(['../']);
    }
  }

  onOpenEditAction(component, data) {
      const editModal = this.dialog.open(component, {
        width: '250px',
        data: data
      });
      editModal.afterClosed().subscribe(result => {
        console.log(result);
      });
  }
}
