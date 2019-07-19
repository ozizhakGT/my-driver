import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  baseUrl = 'http://localhost:8080/assets';

  constructor(private http: HttpClient, private router: Router) { }

  getDrivers() {
    return this.http.get(`${this.baseUrl}/drivers.json`);
  }

  // Deleting Driver and return path one step back
  deleteDriver(i, drivers) {
      drivers.splice(i, 1).slice();
      this.router.navigate(['../']);
  }
}
