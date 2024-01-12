import { Component } from '@angular/core';

export interface Product {
  imgURL: string,
  name: string,
  price: string
}


@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent {
  public products: Array<Product> = [
      {
        imgURL: '../../../../assets/images/shoe4.svg',
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: '../../../../assets/images/shoe5.svg',
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: '../../../../assets/images/shoe6.svg',
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: '../../../../assets/images/shoe7.svg',
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
  ]
}
