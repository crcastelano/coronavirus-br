import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AgmCoreModule } from "@agm/core";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";
import { MaterialModule } from "../modules/material.module";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CovalentModule } from "../modules/covalent.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartModule } from 'primeng/chart';

import { GoogleMapsComponent } from "../components/maps/google/google-maps.component";

import { ToolBarComponent } from "../components/toolbar/toolbar.component";

import { LineChartComponent } from "../components/chart/line-chart.component";

import { TableMaterialComponent } from "../components/table/table-material.component";

import { CarouselComponent } from '../components/info/carousel/carousel.component'

import { AccordionComponent } from '../components/info/accordion/accordion.component'

import { InfoComponent } from '../components/info/info.component'

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import tableMaterialComponentCss from '../components/table/table-material.component.css';
registerLocaleData(ptBr)

import * as Mapa from "../models/mapa";

export const APP_ROUTES =  [
  { 
    icon: 'home',
    path: '',
    label: 'Início', 
    redirectTo: '/mapa', 
    pathMatch: 'full' 
  },
  { 
    icon: 'map',
    path: 'mapa', 
    component: GoogleMapsComponent, 
    label: 'Mapa' 
  },
  { 
    icon: 'dashboard',
    path: 'graficos', 
    component: LineChartComponent, 
    label: 'Gráficos'
  },
  { 
    icon: 'table_chart',
    path: 'consultas', 
    component: TableMaterialComponent,
    label: 'Consultas'
  },
  { 
    icon: 'add_alert',
    path: 'info', 
    component: InfoComponent,
    label: 'Informações'
  },
];

export const MAPSTYLES = [
    { id: Mapa.MAPSTYLEBLACK, name: "Dark" },
    { id: Mapa.MAPSTYLESTANDARD, name: "Standard" },
    { id: Mapa.MAPSTYLEAUBURGINE, name: "Burgine" },
    { id: Mapa.MAPSTYLESILVER, name: "Silver" },
    { id: Mapa.MAPSTYLERETRO, name: "Retro" },
    { id: Mapa.MAPSTYLEANIGHT, name: "Night" }
  ];

export var SELECTEDSTYLE = Mapa.MAPSTYLEBLACK;

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
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
  declarations: [ AppComponent, GoogleMapsComponent, ToolBarComponent, LineChartComponent, TableMaterialComponent, CarouselComponent, AccordionComponent, InfoComponent],
  bootstrap:    [ AppComponent ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
})
export class AppModule { }
