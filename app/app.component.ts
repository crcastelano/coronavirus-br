import {Component, MouseEvent} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TdMediaService } from '@covalent/core/media';
import { APP_ROUTES } from './app.module';
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";
import * as Mapa from "../models/mapa";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Corona vírus (COVID-19) no Brasil';
  routes = APP_ROUTES;

  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {

    this.routes.pop();           

    this._iconRegistry.addSvgIconInNamespace('assets', 'brasil',
    this._domSanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/457/457992.svg'));

    this._iconRegistry.addSvgIconInNamespace('assets', 'covid',
    this._domSanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/2585/2585189.svg'));
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }

  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
