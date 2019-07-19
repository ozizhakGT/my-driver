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

  refreshSelection(tasks) {
    let allTasks = tasks._elementRef.nativeElement;
    for (let i = 0; i < allTasks['children'].length; i++) {
      allTasks['children'][i].classList.remove('selected-task');
    }
  }

  onSelected(tasks, taskName) {
    let task = taskName._element.nativeElement;
    let allTasks = tasks._elementRef.nativeElement;
    if (this.selected) {
      for (let i = 0; i < allTasks['children'].length; i++) {
        if (task.textContent === allTasks['children'][i].textContent) {
          allTasks['children'][i].classList.add('selected-task');
        } else {
          allTasks['children'][i].classList.remove('selected-task');
        }
      }
    } else {
      task.classList.toggle('selected-task');
      this.selected = true;
    }
    console.log(task.textContent)
    this.router.navigate([this.driver.name, task.textContent])
  }

  onAction(method, driver) {
    switch (method) {
      case 'delete':
        console.log('delete')
        this.selectedDriver.emit(driver);
        break;
      case 'edit':
        console.log('edit')
    }
  }
}
