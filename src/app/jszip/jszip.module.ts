import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JszipRoutingModule } from './jszip-routing.module';
import { JszipComponent } from './jszip.component';


@NgModule({
  declarations: [
    JszipComponent
  ],
  imports: [
    CommonModule,
    JszipRoutingModule
  ]
})
export class JszipModule { }
