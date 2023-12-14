import { Component } from '@angular/core';

export interface Review {
  imgURL: string,
  customerName: string,
  rating: number,
  feedback: string
}

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent {
  public reviews: Array<Review> = [
    {
      imgURL: "../../../../assets/images/customer1.jpeg",
      customerName: 'Morich Brown',
      rating: 4.5,
      feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: "../../../../assets/images/customer2.svg",
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
  ]
}
