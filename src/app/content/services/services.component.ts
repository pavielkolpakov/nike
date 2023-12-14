import { Component } from '@angular/core';

export interface Service {
  imgURL: string,
  label: string,
  subtext: string
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  public services: Array<Service> = [
    {
        imgURL: "../../../../assets/icons/truck-fast.svg",
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: "../../../../assets/icons/shield-tick.svg",
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: "../../../../assets/icons/support.svg",
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
}
