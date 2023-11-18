import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' }
  ];

  public shoes = [
    {
        thumbnail: '../../../assets/images/thumbnail-shoe1.svg',
        bigShoe: '../../../assets/images/big-shoe1.svg',
    },
    {
        thumbnail: '../../../assets/images/thumbnail-shoe1.svg',
        bigShoe: '../../../assets/images/big-shoe1.svg',
    },
    {
        thumbnail: '../../../assets/images/thumbnail-shoe1.svg',
        bigShoe: '../../../assets/images/big-shoe1.svg',
    },
  ];
}
