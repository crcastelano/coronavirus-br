import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CoronaService } from "../../../services/corona.service";
import { formatDate } from "@angular/common";
import * as Papa from "papaparse";

@Component({
  selector: "crc-table-cidades-mortes",
  styleUrls: ["../table.component.css"],
  templateUrl: "table-cidades-mortes.component.html"
})
export class TableCidadesMortesComponent implements OnInit {
  colunasTotal: string[] = [
    "Tcity",
    "Tdeaths",
    "TtotalCases"
  ];

  dataSourceTotal: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private coronaService: CoronaService,
    private httpClient: HttpClient
  ) {
    this.cardTabelaTotal();
  }

  ngOnInit() {
    // this.dataSourceDiario.paginator = this.paginator;
    // this.dataSourceDiario.sort = this.sort;
  }

  private cardTabelaTotal() {
    // console.log(this.coronaService.loadCSV2(1));
    this.coronaService.loadCSV2(1).subscribe((data: any) => {
        console.log('data');
      // Papa.parse(data, {
      //   complete: parsedData => {

      //     const dataTable = this.setTabelaTotal(parsedData.data);
      //     this.dataSourceTotal = new MatTableDataSource(dataTable);
      //     this.dataSourceTotal.paginator = this.paginator;
      //     this.dataSourceTotal.sort = this.sort;
      //   }
      // });
    });
  }

/*
  private cardTabelaTotal() {
    this.coronaService.loadCSV()[1].subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          const dataTable = this.setTabelaTotal(parsedData.data);
          this.dataSourceTotal = new MatTableDataSource(dataTable);
          this.dataSourceTotal.paginator = this.paginator;
          this.dataSourceTotal.sort = this.sort;
        }
      });
    });
  }
*/

  private setTabelaTotal(dados) {
    const source: any[] = [];
    for (var key = 1; key < dados.length-1; key++) {
      let data: any = {
        Tcity: dados[key][2],
        Tdeaths: dados[key][4],
        TtotalCases: dados[key][5]
      };
      source.push(data);
    }
    return source;
  }

  applyFilterTotal(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSourceTotal.filter = filterValue.trim().toLowerCase();

    // if (this.dataSourceTotal.paginator) {
    //   this.dataSourceTotal.paginator.firstPage();
    // }
  }
}
