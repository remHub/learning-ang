import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstNameComponent } from './form-fields/first-name/first-name.component';
import { LastNameComponent } from './form-fields/last-name/last-name.component';
import { FormBaseComponent } from './form-fields/form-base/form-base.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    LastNameComponent,
    FormBaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
