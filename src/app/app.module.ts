import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerReviewsComponent } from './content/customer-reviews/customer-reviews.component';
import { FooterComponent } from './content/footer/footer.component';
import { HeroComponent } from './content/hero/hero.component';
import { PopularProductsComponent } from './content/popular-products/popular-products.component';
import { ServicesComponent } from './content/services/services.component';
import { SpecialOfferComponent } from './content/special-offer/special-offer.component';
import { SubscribeComponent } from './content/subscribe/subscribe.component';
import { SuperQualityComponent } from './content/super-quality/super-quality.component';
import { NavComponent } from './content/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerReviewsComponent,
    FooterComponent,
    HeroComponent,
    PopularProductsComponent,
    ServicesComponent,
    SpecialOfferComponent,
    SubscribeComponent,
    SuperQualityComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
