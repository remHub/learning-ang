import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { FormsComponent } from './page/forms/forms.component';
import { DocumentationComponent } from './page/documentation/documentation.component';
import { PicturesComponent } from './page/pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    FormsComponent,
    DocumentationComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
