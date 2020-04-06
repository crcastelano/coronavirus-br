import { Component, HostBinding, AfterViewInit } from "@angular/core";
import { AgmCoreModule, MouseEvent } from "@agm/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";
import { MaterialModule } from "../../../material/material.module";
import * as Papa from "papaparse";
import * as Mapa from "../../../models/mapa";
import { CoronaService } from "../../../services/corona.service";
import localeBr from "@angular/common/locales/br";
import { registerLocaleData } from "@angular/common";

declare var google: any;

@Component({
  selector: "crc-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent implements AfterViewInit {
  markers: Mapa.Marker[] = [];
  // heatmaps: google.maps.LatLng[] = [];

  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;
  previous;

  mapStyles = [
    { id: Mapa.MAPSTYLEBLACK, name: "Dark" },
    { id: Mapa.MAPSTYLESTANDARD, name: "Standard" },
    { id: Mapa.MAPSTYLEAUBURGINE, name: "Burgine" },
    { id: Mapa.MAPSTYLESILVER, name: "Silver" },
    { id: Mapa.MAPSTYLERETRO, name: "Retro" },
    { id: Mapa.MAPSTYLEANIGHT, name: "Night" }
  ];

  public selectedStyle = Mapa.MAPSTYLEBLACK;

  apiData: any[] = [];

  constructor(private coronaService: CoronaService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.cardMap();
    }, 500);
  }

  changeStyle(data) {
    // alert("selected --->" + this.mapStyles[data].id);
    // this.selectedStyle = this.mapStyles[data].id;
  }

  private cardMap(): void {
    this.coronaService.loadCSV()[5].subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.apiData = parsedData.data;
          this.setMap();
        }
      });
    });
  }

  private setMap() {
    const fator = 5000;
    // this.heatmaps = [];
    for (var key = 1; key < this.apiData.length; key++) {
      let makerlatitude = Number(this.apiData[key][2]);
      let markerlongitude = Number(this.apiData[key][3]);

      if (makerlatitude && markerlongitude) {
        // círculo com raio proporcioal aos nº de casos
        var cityCircle = new google.maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 0,
          fillColor: "#FF0000", //"#49599a", //"#1a237e",
          fillOpacity: 0.35,
          map: this.map,
          center: { lat: makerlatitude, lng: markerlongitude },
          radius: Math.sqrt(this.apiData[key][4] * fator) * 100
        });
        var title =
          this.apiData[key][1] +
          "\n\n" +
          "Nº de casos: " +
          this.apiData[key][4];

        var label =
          this.apiData[key][1] + " - " + "Nº de casos: " + this.apiData[key][4];
        var icon = {
          url:
            "1https://w3bspace.uk/wp-content/uploads/2016/01/location_map_pin_yellow5.png", // url
          scaledSize: new google.maps.Size(20, 20) // size
        };
        // marcador no mapa
        let mark: Mapa.Marker = {
          latitude: makerlatitude,
          longitude: markerlongitude,
          title: title,
          label: label,
          icon: icon,
          draggable: false
        };
        this.markers.push(mark);
      }
    }
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
  }

  clickedMarker(infowindow) {
    console.log("clicou");
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  mapClicked($event: MouseEvent) {
    console.log("clicou no mapa");
  }

  markerDragEnd(m: Mapa.Marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }
}
