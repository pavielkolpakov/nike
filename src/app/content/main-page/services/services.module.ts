import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [
    ServicesComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule { }
