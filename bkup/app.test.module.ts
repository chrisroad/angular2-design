import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import
       { AppTestComponent }  from './app.test.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppTestComponent ],
  bootstrap:    [ AppTestComponent ]
})
export class AppTestModule { }
