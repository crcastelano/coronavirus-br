import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CoronaCSV } from "../models/corona";
import * as Papa from "papaparse";
import { CSVService } from "./csv.service";
import { APICSV } from "./ApiCsv";
import { APICSV2 } from "./ApiCsv";

@Injectable({
  providedIn: "root"
})
export class CoronaService {
  constructor(private httpClient: HttpClient, private csvService: CSVService) {}

  public loadCSV(): Observable<any>[] {
    let retorno = [];
    for (let key in APICSV) {
      retorno.push(this.csvService.loadCSV(APICSV[key]));
    }
    return retorno; //this.csvService.loadCSV(url);
  }

  public loadCSV2(key): Observable<any> {
    return this.csvService.loadCSV2(APICSV2[key]);
  }

}
