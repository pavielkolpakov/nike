import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public bigShoeImage: string = '../../../assets/images/big-shoe1.png';
  public statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' }
  ];

  public shoes = [
    {
        thumbnail: '../../../assets/images/thumbnail-shoe1.svg',
        bigShoe: '../../../assets/images/big-shoe1.png',
    },
    {
        thumbnail: '../../../assets/images/thumbnail-shoe2.svg',
        bigShoe: '../../../assets/images/big-shoe2.png',
    },
    {
        thumbnail: '../../../assets/images/thumbnail-shoe3.svg',
        bigShoe: '../../../assets/images/big-shoe3.png',
    },
  ];

  handleClick(bigShoeImg: string) {
    if (this.bigShoeImage !== bigShoeImg) {
      this.changeBigShoeImange(bigShoeImg);
    }
  }

  changeBigShoeImange(bigShoeImg: string) {
    this.bigShoeImage = bigShoeImg;
  }
}
