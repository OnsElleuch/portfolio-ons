import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectInsatComponent } from './project-insat/project-insat.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectLogisComponent } from './project-logis/project-logis.component';
import { SpamDetectorComponent } from './spam-detector/spam-detector.component';
import { TripPricePredictionComponent } from './trip-price-prediction/trip-price-prediction.component';
import { PentboxComponent } from './pentbox/pentbox.component';
import { HousePricesComponent } from './house-prices/house-prices.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectInsatComponent,
    HomePageComponent,
    ProjectLogisComponent,
    SpamDetectorComponent,
    TripPricePredictionComponent,
    PentboxComponent,
    HousePricesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
