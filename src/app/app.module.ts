import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './custom-pipes/append.pipes';
import { AppendCLIPipe } from './custom-pipes/append-cli.pipe';
import { ShortenPipe } from './custom-pipes/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    AppendPipe,
    AppendCLIPipe,
    ShortenPipe

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
