import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CoronaService } from "../../../services/corona.service";
import { formatDate } from "@angular/common";
import * as Papa from "papaparse";

@Component({
  selector: "crc-table-cidades-novos",
  styleUrls: ["../table.component.css"],
  templateUrl: "table-cidades-novos.component.html"
})
export class TableCidadesNovosComponent {
  colunasDiarios: string[] = [
    "date",
    "city",
    "newCases",
    "totalCases"
  ];

  length = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  dataSourceDiario: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private coronaService: CoronaService,
    private httpClient: HttpClient
  ) {
    this.cardTabelaDiaria();
  }

  private cardTabelaDiaria() {
    this.coronaService.loadCSV2(0).subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          const dataTable = this.setTabelaDiaria(parsedData.data.reverse());
          this.dataSourceDiario = new MatTableDataSource(dataTable);
          this.dataSourceDiario.paginator = this.paginator;
          this.dataSourceDiario.sort = this.sort;
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

  applyFilterDiario(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDiario.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDiario.paginator) {
      this.dataSourceDiario.paginator.firstPage();
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
