import { Component } from '@angular/core';

export interface FooterLink {
  title: string,
  links: [
    {
      name: string,
      link: string
    }
  ]
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public socialMedia = [
    { src: "../../../assets/icons/facebook.svg", alt: "facebook logo" },
    { src: "../../../assets/icons/twitter.svg", alt: "twitter logo" },
    { src: "../../../assets/icons/instagram.svg", alt: "instagram logo" },
  ];

  public footerLinks = [
    {
      title: "Products",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
    },
    {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "customer@nike.com", link: "mailto:customer@nike.com" },
        { name: "+92554862354", link: "tel:+92554862354" },
      ],
    },
  ];
}
