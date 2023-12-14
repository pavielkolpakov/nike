import { Component, Input } from '@angular/core';
import { Review } from '../customer-reviews.component';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  @Input() public review: Review;
}
