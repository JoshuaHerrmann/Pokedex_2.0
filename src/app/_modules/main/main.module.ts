import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderFooterModule } from '../header-footer/header-footer.module';
import { CardComponent } from './card/card.component';
import { DialogCardDetailsComponent } from './dialog-card-details/dialog-card-details.component';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    DialogCardDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderFooterModule
  ],
  exports : [
    MainComponent,
    CardComponent,
    DialogCardDetailsComponent
  ]
})
export class MainModule { }
