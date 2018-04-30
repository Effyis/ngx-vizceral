import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VizceralModule} from 'ngx-vizceral';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VizceralModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
