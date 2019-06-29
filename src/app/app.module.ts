import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IpInputLibModule } from 'ip-input-lib';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    IpInputLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
