import {Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { TdMediaService } from '@covalent/core/media';
import { APP_ROUTES } from './app.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Corona vírus no Brasil';
  routes = APP_ROUTES;

  routes2: Object[] = [{
      icon: 'map',
      route: 'google-maps',
      title: 'Mapa',
    }, {
      icon: 'dashboard',
      route: '.',
      title: 'Gráficos',
    }, {
      icon: 'table_chart',
      route: '.',
      title: 'Consultas',
    },
  ];

  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
                
              // this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
              // this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
              // this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              // this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
              // this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
              // this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
