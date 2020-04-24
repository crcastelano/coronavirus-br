import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CoronaCSV } from "../models/corona";
import { Estado, ESTADOS } from "../models/estado";
import { Total } from "../models/total";
import * as Papa from "papaparse";
import { CSVService } from "./csv.service";
import { APICSV } from "./ApiCsv";

@Injectable({
  providedIn: "root"
})
export class CoronaService {
  public coronas: CoronaCSV[] = [];
  public total: Total;

  csvData: any[] = [];
  headerRow: any[] = [];

  constructor(private httpClient: HttpClient, private csvService: CSVService) {}

  public loadCSV(): Observable<any>[] {
    let retorno = [];
    for (let key in APICSV) {
      retorno.push(this.csvService.loadCSV(APICSV[key]));
    }
    return retorno; //this.csvService.loadCSV(url);
  }

  public loadCSV2(key): Observable<any> {
    return this.csvService.loadCSV(APICSV[key]);
  }

  public loadCSVTotal(): Observable<any> {
    return this.csvService.loadCSVTotal(APICSV.Total);
  }

  getCoronas(): Observable<Corona[]> {
    return this.httpClient.get<Corona>(url);
  }

  getCoronas2(): Observable<CoronaCSV[]> {
    return this.httpClient.get<CoronaCSV>(url2);
  }

  getCorona(uid: number): Observable<Corona> {
    return this.httpClient.get<Corona>(url + uid);
  }

  listar(): Observable<Corona[]> {
    return this.httpClient.get<Corona[]>(url);
  }
}
