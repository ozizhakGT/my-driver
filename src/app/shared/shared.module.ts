import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule
  ]
})
export class SharedModule {
}
