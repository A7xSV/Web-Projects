import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressSpinnerModule, MdButtonModule, MdInputModule, MdToolbarModule, MdSnackBarModule, MdSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [ 
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

// declarations property is used to register any new components that you create which makes it a part of this module
// imports property is used to import any other modules needed, like the ones here provided by Angular
// providers property will be covered under services
// bootstrap property refers to the components that the index.html file mut recognise