// ANGULAR BUILD IN MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    MapComponent,
    DriverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
