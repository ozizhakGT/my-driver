// ANGULAR BUILD IN MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// COSTUM MODULES
import {SharedModule} from './shared/shared.module';


//COMPONENTS & DIRECTIVES
import { AppComponent } from './app.component';
import { DriversComponent } from './drivers/drivers.component';
import { MapComponent } from './map/map.component';
import { DriverComponent } from './drivers/driver/driver.component';
import {AgmCoreModule} from '@agm/core';
import { EditModalComponent } from './drivers/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    MapComponent,
    DriverComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwPEKxYAP_GQFWLk_3Ai3w6BADkHlVLCI'
    })
  ],
  entryComponents: [EditModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
