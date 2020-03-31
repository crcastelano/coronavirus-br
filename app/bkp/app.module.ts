import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AgmCoreModule } from "@agm/core";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";
import { MaterialModule } from "../modules/material.module";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CovalentModule } from "../modules/covalent.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ChartModule} from 'primeng/chart';

import { GoogleMapsComponent } from "../components/maps/google/google-maps.component";

import { ToolBarComponent } from "../components/toolbar/toolbar.component";

import { LineChartComponent } from "../components/chart/line-chart.component";

import { TableMaterialComponent } from "../components/table/table-material.component";

import { CarouselComponent } from '../components/carousel/carousel.component'

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    AgmCoreModule.forRoot({
      //@agm/core
      apiKey: "AIzaSyBtkzgjM1tqaHRipAlAF8HRuRr_xFNzFuk",
      // libraries: ['visualization', 'geometry'], 
    }),
    HttpClientModule,
    /** Material Modules */
    MaterialModule,
    /** Covalent Modules */
    CovalentModule,
    ChartModule,
    NgbModule    
    ],
  declarations: [ AppComponent, GoogleMapsComponent, ToolBarComponent, LineChartComponent, TableMaterialComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
})
export class AppModule { }
