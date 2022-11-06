import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BhagyaComponent } from './bhagya/bhagya.component';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BhagyaComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
