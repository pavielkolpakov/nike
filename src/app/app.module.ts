import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './content/footer/footer.component';
import { HeroComponent } from './content/main-page/hero/hero.component';
import { SpecialOfferComponent } from './content/main-page/special-offer/special-offer.component';
import { SubscribeComponent } from './content/main-page/subscribe/subscribe.component';
import { SuperQualityComponent } from './content/main-page/super-quality/super-quality.component';
import { NavComponent } from './content/nav/nav.component';
import { PopularProductsModule } from './content/main-page/popular-products/popular-products.module';
import { ServicesModule } from './content/main-page/services/services.module';
import { CustomerReviewsModule } from './content/main-page/customer-reviews/customer-reviews.module';
import { MainPageComponent } from './content/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { authReducer } from './state/auth/auth.reducers';
import { AuthEffects } from './state/auth/auth.effects';
import { MatIconModule } from '@angular/material/icon';
import { httpInterceptorProviders } from './http-interceptors';
// import { reducers } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeroComponent,
    SpecialOfferComponent,
    SubscribeComponent,
    SuperQualityComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CustomerReviewsModule,
    PopularProductsModule,
    ServicesModule,
    SharedModule,
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
