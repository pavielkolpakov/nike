import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductsComponent } from './popular-products.component';
import { PopularProductCardComponent } from './popular-product-card/popular-product-card.component';



@NgModule({
  declarations: [
    PopularProductsComponent,
    PopularProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopularProductsComponent
  ]
})
export class PopularProductsModule { }
