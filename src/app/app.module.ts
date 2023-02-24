import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './_modules/header-footer/header-footer.module';
import { MainModule } from './_modules/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
