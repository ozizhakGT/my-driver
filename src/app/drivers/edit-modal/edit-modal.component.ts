import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Driver} from '../../shared/driver.interface';
import {FormControl, FormGroup, NgForm, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  editForm: FormGroup;
  constructor(public dialog: MatDialogRef<EditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Driver) { }

  ngOnInit() {
    const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.editForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      email: new FormControl(this.data.email, [Validators.required, Validators.pattern(emailValidation)]),
      phone: new FormControl(this.data.phone, [Validators.required]),
    });
  }

  onNoClick(): void {
    this.dialog.close();
  }

}
