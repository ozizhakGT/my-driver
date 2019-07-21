import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  baseUrl = 'http://localhost:8080/assets';
  driver = new Subject();
  editModal;

  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog,
              private notification: MatSnackBar) { }

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
    if(confirm(`are you sure you want Deleting ${drivers[i].name}?`)) {
      drivers.splice(i, 1).slice();
      this.driver.next('none');
      this.router.navigate(['../']);
    }
  }

  onOpenEditAction(component, data) {
      this.editModal = this.dialog.open(component, {
        width: '650px',
        data: data,
        disableClose: true
      });
  }

  showNotification(text: string, method: string) {
    this.notification.open(text, null, {
      duration: 3500,
      panelClass: method,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
