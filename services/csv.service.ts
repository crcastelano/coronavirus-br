import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const url = "https://api.coronaanalytic.com/brazil/"; //API descontinuada
const url2 =
  "https://github.com/wcota/covid19br/blob/master/cases-brazil-total.csv";
const url3 =
  "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv";

@Injectable({
  providedIn: "root"
})
export class CSVService {
  csvData: any[] = [];
  headerRow: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  public loadCSV(file): Observable<any> {
    return this.httpClient
      .get(file, {
        responseType: "text"
      });
  }

  public loadCSV2(file): Observable<any> {
    return this.httpClient
      .get(file, {
        responseType: "text"
      });
  }
}
