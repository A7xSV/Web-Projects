import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AllTableComponent } from './all-table/all-table.component';
import { TableJsonComponent } from './table-json/table-json.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTableComponent,
    TableJsonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }