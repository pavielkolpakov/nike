import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card/review-card.component';
import { CustomerReviewsComponent } from './customer-reviews.component';



@NgModule({
  declarations: [
    CustomerReviewsComponent,
    ReviewCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerReviewsComponent
  ]
})
export class CustomerReviewsModule { }
