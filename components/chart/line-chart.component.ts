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
  chartCasos = [];
  chartMortes = [];
  options: any;

  constructor(
    private messageService: MessageService,
    private coronaService: CoronaService
  ) {
    this.cardChartAvanco();
    this.cardChartEstados();
  }

  private cardChartEstados(): void {
    this.coronaService.loadCSV2(3).subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.setChartEstados(parsedData.data);
        }
      });
    });
  }

  private cardChartAvanco(): void {
    this.coronaService.loadCSV2(2).subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.setChartAvanco(parsedData.data);
        }
      });
    });
  }

  private setChartEstados(ApiDados) {
    //country,state,totalCases,totalCasesMS,notConfirmedByMS,deaths,URL
    let dados = ApiDados.slice(2, ApiDados.length - 1);

    // dados = dados.filter(function(item) {
    //       return item[5] > 0;
    //     });
    dados.sort((a, b) => (a[1] > b[1] ? 1 : -1));

    const labels = dados.map(function(d) {
      return d[1];
    });

    const serie1Label = "Casos confirmados";
    const serie1Data = dados.map(function(d) {
      return d[3];
    });

    const serie2Label = "Mortes";
    const serie2Data = dados.map(function(d) {
      return d[5];
    });

    var colors = [
      "Blue",
      "Green",
      "Red",
      "Orange",
      "Violet",
      "Indigo",
      "Yellow",
      "Gray",
      "BlueViolet",
      "Aqua",
      "Chocolate",
      "Gold",
      "Fuschia",
      "Tomato",
      "Teal",
      "Siena",
      "Silver",
      "SkyBlue",
      "Oranged",
      "Orchid",
      "Darkcyan",
      "Lima",
      "DarkSalmon",
      "SeaGreen",
      "SlateBlue",
      "MediumSlateBlue",
      ""
    ];

    let datasets = {
      labels: labels,
      datasets: [
        {
          label: serie1Label,
          data: serie1Data,
          backgroundColor: "#9d46ff", //"#2196F3",
          borderColor: "black" //"#2196F3"
        }
        // {
        //   label: serie2Label,
        //   data: serie2Data,
        //   backgroundColor: colors, //"#2196F3",
        //   borderColor: "#7CB342"
        // }
      ]
    };

    this.chartCasos.push(JSON.stringify(datasets));
    this.chartCasos = JSON.parse(this.chartCasos);

    datasets = {
      labels: labels,
      datasets: [
        // {
        //   label: serie1Label,
        //   data: serie1Data,
        //   backgroundColor: "#9d46ff", //"#2196F3",
        //   borderColor: "black" //"#2196F3"
        // },
        {
          label: serie2Label,
          data: serie2Data,
          backgroundColor: "#d32f2f",
          borderColor: "#7CB342"
        }
      ]
    };
    this.chartMortes.push(JSON.stringify(datasets));
    this.chartMortes = JSON.parse(this.chartMortes);
  }

  private setChartAvanco(ApiDados) {
    let dados = ApiDados.filter(function(item) {
      return item[4] === "TOTAL";
    });

    const labels = dados.map(function(d) {
      return formatDate(d[1], "dd/MM/yyyy", "pt");
    });

    const serie1Label = "Novos Casos";
    const serie1Data = dados.map(function(d) {
      return d[7];
    });

    const serie2Label = "Mortes";
    const serie2Data = dados.map(function(d) {
      return d[4];
    });

    const serie3Label = "Total de Casos";
    const serie3Data = dados.map(function(d) {
      return d[10];
    });

    let datasets = {
      labels: labels,
      datasets: [
        {
          label: serie1Label,
          data: serie1Data,
          fill: false,
          // color: "red",
          borderColor: "#2196F3"
        },
        {
          label: serie2Label,
          data: serie2Data,
          fill: false,
          borderColor: "#d32f2f"
        },
        // {
        //   label: serie3Label,
        //   data: serie3Data,
        //   fill: true,
        //   borderColor: "#9d46ff"
        // }
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
