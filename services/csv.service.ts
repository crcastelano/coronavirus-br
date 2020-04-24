import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CoronaCSV } from "../models/corona";
import { Estado, ESTADOS } from "../models/estado";
import { Total } from "../models/total";
import * as Papa from "papaparse";

const url = "https://api.coronaanalytic.com/brazil/"; //API descontinuada
const url2 =
  "https://github.com/wcota/covid19br/blob/master/cases-brazil-total.csv";
const url3 =
  "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv";

const arquivoCSV = "assets/csv/cases-brazil-total.csv";

@Injectable({
  providedIn: "root"
})
export class CSVService {
  public coronas: CoronaCSV[] = [];
  public total: Total;

  csvData: any[] = [];
  headerRow: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  private extractData(res) {
    let csvData = res || "";

    Papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
      }
    });
  }

  public loadCSV(file): Observable<any> {
    return this.httpClient
      .get(file, {
        responseType: "text"
      });
  }

  public loadCSV2(file): Observable<any> {
    console.log(file);
    return this.httpClient
      .get(file, {
        responseType: "text"
      });
  }

  private extractDataTotal(res) {
    let csvData = res || "";
    Papa.parse(csvData, {
      complete: parsedData => {
        // console.log(parsedData.data[1]);
        this.headerRow = parsedData.data.splice(0, 1)[0];
        // console.log(this.headerRow);
        // console.log(parsedData.data[0]);
        this.csvData = parsedData.data;
      }
    });
  }

  public loadCSVTotal(file) {
    this.httpClient
      .get(file, {
        responseType: 'text'
      })
      .subscribe(
        data => this.extractDataTotal(data),
        err => console.log('something went wrong: ', err)
      );
    console.log(this.csvData);
  }

  public setCSV() {
    let options = {
      delimiter: ",", // auto-detect
      header: false,
      dynamicTyping: true
    };

    // let csv2 = Papa.papa.parse(arquivo {
    //   complete: result => {
c
    //     console.log(result);
    //   }
    // });

    let d = "a";

    this.httpClient.get(arquivo, { responseType: "text" }).subscribe(data => {
      return Papa.parse(data, {
        delimiter: ",",
        header: true,
        skipEmptyLines: true,
        complete: parsedData => {
          this.headerRow = parsedData.data.splice(0, 1)[0];
          this.csvData = parsedData.data;
        }
      });
    });

    console.log("Não atualiza o atributo dados");

    let csv = Papa.parse(arquivo, options);

    //    console.log(csv);
    // reader.re.readAsText("assets/csv/cases-brazil-total.csv");

    //   r. = "assets/csv/cases-brazil-total.csv";
    // console.log(selectedFile);
    // const reader = new FileReader(r);
    // var csv = reader.result.toString().trim();

    // let csv = Papa.papa.parse(arquivo {
    //   complete: result => {
    //     console.log("Parsed: ");
    //     console.log(result);
    //   }
    // });

    // console.log(csv);
    // let result: ParseResult = load(csv);
    // console.log(result.data);

    // reader.readAsText(selectedFile);

    // console.log(this.selectedFile.name);

    /*
private selectedFile: File;
  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const reader = new FileReader();
    reader.onload = function(e) {
       var csv = reader.result.toString().trim();
       console.log(csv);
       let result:ParseResult = load(csv);
       console.log(result.data);
    }
    reader.readAsText(this.selectedFile);

    console.log(this.selectedFile.name);

*/

    // let csv2 = Papa.papa.parse("assets/csv/cases-brazil-total.csv", {
    //   complete: result => {
    //     console.log("Parsed: ");
    //     console.log(result);
    //   }
    // });

    // Papa.parse("assets/csv/cases-brazil-total.csv", {
    //   download: true,
    //   step: function(row) {
    //     let c: CoronaCSV;
    //     // console.log(data);
    //     // c.state = row.data[1];
    //     // console.log("Row:", c.state);

    //     let corona: CoronaCSV = {
    //       state: row.data[1],
    //       totalCases: Number(row.data[2]),
    //       deaths: Number(row.data[5]),
    //       totalCasesMS: Number(row.data[3]),
    //       notConfirmedByMS: Number(row.data[4])
    //     };
    //     console.log(corona);
    //     this.coronas.push(corona);
    //   },
    //   complete: function() {
    //     console.log("All done!");
    //   }
    // });

    // this.httpClient
    //   .get("assets/csv/cases-brazil-total.csv", { responseType: "text" })
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //       let csvToRowArray = data.split("\n");
    //       let row = csvToRowArray[1].split(","); //linha dos totais
    //       this.total = {
    //         date: Date,
    //         time: string,
    //         totalCases: Number(row[index][2]),
    //         totalCasesMS: Number(row[index][3]),
    //         notConfirmedByMS: Number(row[index][4]),
    //         deaths: Number(row[index][5])
    //       };
    //       for (let index = 2; index < csvToRowArray.length - 1; index++) {
    //         let row = csvToRowArray[index].split(",");
    //         console.log(row[index]);
    //         let corona: CoronaCSV = {
    //           state: row[index][1],
    //           totalCases: Number(row[index][2]),
    //           deaths: Number(row[index][5]),
    //           totalCasesMS: Number(row[index][3]),
    //           notConfirmedByMS: Number(row[index][4])
    //         };
    //         console.log(corona);
    //         // corona.uid = ESTADOS.find(o => o.uid === estado.uid);
    //         // corona.state = row[index][1];
    //         // console.log(corona.state);
    //         // corona.totalCases = Number(row[index][2]);
    //         // corona.deaths = Number(row[index][5]);
    //         // corona.totalCasesMS = Number(row[index][3]);
    //         // corona.notConfirmedByMS = Number(row[index][4]);
    //         this.coronas.push(corona);
    //         // console.log('linha: '+index);
    //         // console.log(row);
    //         // this.userArray.push(new User( parseInt( row[0], 10), row[1], row[2].trim()));
    //       }
    //       // console.log(this.userArray);
    //     },
    //     error => {
    //       console.log("erro getCSV()");
    //       console.log(error);
    //     }
    //   );
  }

  public getCSV(): CoronaCSV[] {
    this.httpClient
      .get("assets/csv/cases-brazil-total.csv", { responseType: "text" })
      .subscribe(
        data => {
          // console.log(data);
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            let corona: CoronaCSV;

            // corona.uid = ESTADOS.find(o => o.uid === estado.uid);
            corona.state = row[index][1];
            corona.totalCases = Number(row[index][2]);
            corona.deaths = Number(row[index][5]);
            corona.totalCasesMS = Number(row[index][3]);
            corona.notConfirmedByMS = Number(row[index][4]);
            console.log(corona);
            this.coronas.push(corona);
            // console.log('linha: '+index);
            // console.log(row);
            // this.userArray.push(new User( parseInt( row[0], 10), row[1], row[2].trim()));
          }
          // console.log(this.userArray);
        },
        error => {
          console.log("erro getCSV()");
          console.log(error);
        }
      );
    return coronas;
  }

  // public uploadDatasource(): Observable<any[]> {
  //   let headers = new Headers();
  //   let payload = url2;

  //   headers.append("Accept", "application/json, text/plain,");
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http
  //     .post(`API_UPLOAD_PATH`, payload, options)
  //     .map((res: Response) => {
  //       let data = res.json();
  //       console.log("vemmm");
  //       console.log(data);
  //       return data;
  //     })
  //     .catch(error => Observable.throw(error));
  // }

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
