import { Component, Input } from "@angular/core";
import { MessageService } from "primeng/api";
import * as Papa from "papaparse";
import { CoronaService } from "../../services/corona.service";
import { formatDate } from "@angular/common";
import { registerLocaleData } from "@angular/common";
import localeBr from "@angular/common/locales/br";

@Component({
  selector: "crc-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
  providers: [MessageService]
})
export class LineChartComponent {
  @Input() public dados: any;
  chartAvanco = [];
  chartEstados = [];

  constructor(
    private messageService: MessageService,
    private coronaService: CoronaService,
  ) {
    this.cardChartAvanco();
    this.cardCharteEstados();
  }

  private cardCharteEstados(): void {
    this.coronaService.loadCSV()[3].subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.setChartAvanco(parsedData.data);
        }
      });
    });
  }

  private cardChartAvanco(): void {
    this.coronaService.loadCSV()[2].subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.setChartAvanco(parsedData.data);
        }
      });
    });
  }

  private setChartEstado(ApiDados) {
    let dados = ApiDados.filter(function(item) {
      return item[2] === "TOTAL";
    });

    const labels = dados.map(function(d) {
      return formatDate(d[0], "dd/MM/yyyy", "pt");
    });

    const serie1Label = "Novos Casos";
    const serie1Data = dados.map(function(d) {
      return d[4];
    });

    const serie2Label = "Mortes";
    const serie2Data = dados.map(function(d) {
      return d[5];
    });

    const serie3Label = "Total de Casos";
    const serie3Data = dados.map(function(d) {
      return d[6];
    });

    let datasets = {
      labels: labels,
      datasets: [
        {
          label: serie1Label,
          data: serie1Data,
          fill: false,
          borderColor: "#2196F3"
        },
        {
          label: serie2Label,
          data: serie2Data,
          fill: false,
          borderColor: "#d32f2f"
        },
        {
          label: serie3Label,
          data: serie3Data,
          fill: false,
          borderColor: "#9d46ff"
        }
      ]
    };
    this.chartAvanco.push(JSON.stringify(datasets));
    this.chartAvanco = JSON.parse(this.chartAvanco);
  }

  
  private setChartAvanco(ApiDados) {
    let dados = ApiDados.filter(function(item) {
      return item[2] === "TOTAL";
    });

    const labels = dados.map(function(d) {
      return formatDate(d[0], "dd/MM/yyyy", "pt");
    });

    const serie1Label = "Novos Casos";
    const serie1Data = dados.map(function(d) {
      return d[4];
    });

    const serie2Label = "Mortes";
    const serie2Data = dados.map(function(d) {
      return d[5];
    });

    const serie3Label = "Total de Casos";
    const serie3Data = dados.map(function(d) {
      return d[6];
    });

    let datasets = {
      labels: labels,
      datasets: [
        {
          label: serie1Label,
          data: serie1Data,
          fill: false,
          borderColor: "#2196F3"
        },
        {
          label: serie2Label,
          data: serie2Data,
          fill: false,
          borderColor: "#d32f2f"
        },
        {
          label: serie3Label,
          data: serie3Data,
          fill: false,
          borderColor: "#9d46ff"
        }
      ]
    };
    this.chartAvanco.push(JSON.stringify(datasets));
    this.chartAvanco = JSON.parse(this.chartAvanco);
  }

  selectData(event) {
    this.messageService.add({
      severity: "info",
      summary: "Data Selected",
      detail: this.data.datasets[event.element._datasetIndex].data[
        event.element._index
      ]
    });
  }

  ngOnInit() {}
}
