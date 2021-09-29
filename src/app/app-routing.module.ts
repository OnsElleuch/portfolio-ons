import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HousePricesComponent } from './house-prices/house-prices.component';
import { PentboxComponent } from './pentbox/pentbox.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectInsatComponent } from './project-insat/project-insat.component';
import { ProjectLogisComponent } from './project-logis/project-logis.component';
import { SpamDetectorComponent } from './spam-detector/spam-detector.component';
import { TripPricePredictionComponent } from './trip-price-prediction/trip-price-prediction.component';

const routes: Routes = [

  { 
    path: 'project-details-01',
    component: ProjectInsatComponent, 
  },
  { 
    path: 'project-details-02',
    component: ProjectLogisComponent, 
  },
  { 
    path: 'project-details-03',
    component: HousePricesComponent, 
  },
  { 
    path: 'project-details-04',
    component: PentboxComponent, 
  },
  { 
    path: 'project-details-05',
    component: SpamDetectorComponent, 
  },
  { 
    path: 'project-details-06',
    component: TripPricePredictionComponent, 
  },
  { 
    path: 'project-details-07',
    component: PortfolioComponent, 
  },
  { 
    path: '',
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
