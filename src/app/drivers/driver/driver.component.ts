import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Driver} from '../../shared/driver.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  @Input() driver: Driver;
  @Output() selectedDriver = new EventEmitter<string>();
  selected = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // All drivers Action properties
  onAction(method) {
    this.selectedDriver.emit(method);
  }
}
