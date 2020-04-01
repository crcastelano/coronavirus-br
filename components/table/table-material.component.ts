import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CoronaService } from "../../services/corona.service";
import { formatDate } from "@angular/common";
import * as Papa from "papaparse";

@Component({
  selector: "crc-mat-table",
  styleUrls: ["table-material.component.css"],
  templateUrl: "table-material.component.html"
})
export class TableMaterialComponent implements OnInit {
  colunasDiarios: string[] = [
    "date",
    "state",
    "city",
    "newCases",
    "totalCases"
  ];

  colunasTotal: string[] = [
    "city",
    "state",
    "deaths",
    "totalCases"
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private coronaService: CoronaService,
    private httpClient: HttpClient
  ) {
    this.cardTabelaDiaria();
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  private cardTabelaDiaria() {
    this.coronaService.loadCSV()[0].subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          const dataTable = this.setTabelaDiaria(parsedData.data.reverse());
          this.dataSource = new MatTableDataSource(dataTable);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
    });
  }

  private setTabelaDiaria(dados) {
    let source: any[] = [];
    for (var key = 1; key < dados.length-1; key++) {
      let data: any = {
        date: dados[key][0],
        state: dados[key][2],
        city: dados[key][3],
        newCases: dados[key][5],
        totalCases: dados[key][6]
      };
      source.push(data);
    }
    return source;
  }

  private cardTabelaTotal() {
    this.coronaService.loadCSV()[1].subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          const dataTable = this.setTabelaTotal(parsedData);
          this.dataSource = new MatTableDataSource(dataTable);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
    });
  }

  private setTabelaTotal(dados) {
    let source: any[] = [];
    for (var key = 1; key < dados.length-1; key++) {
      let data: any = {
        city: dados[key][2],
        state: dados[key][1],
        deaths: dados[key][4],
        totalCases: dados[key][5]
      };
      source.push(data);
    }
    return source;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
