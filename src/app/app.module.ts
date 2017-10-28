import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';

//start:    2017-10-28T17:36:57.929Z
//finish:   2017-10-28T18:10:20.068Z

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
