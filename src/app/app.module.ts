import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormBaseComponent } from './form-fields/form-base/form-base.component';
import { EntryFormComponent } from './form-fields/entry-form/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBaseComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
