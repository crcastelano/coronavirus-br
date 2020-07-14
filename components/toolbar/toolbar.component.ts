import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { MaterialModule } from "../../material/material.module";
import { Total } from "../../models/total";
import { CoronaService } from "../../services/corona.service";
import * as Papa from "papaparse";
import { formatDate } from "@angular/common";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "crc-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolBarComponent {
  total: Total = <Total>{};
  public positionOptions: TooltipPosition[] = ["left"]; //
  public position = new FormControl(this.positionOptions[0]);

  @ViewChild("secondDialog", { static: true }) secondDialog: TemplateRef<any>;
  constructor(
    private coronaService: CoronaService,
//    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.cardTotal();
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogSobre() {
    this.dialog.open(this.sobreDialog);
  }

  private cardTotal(): void {
    this.coronaService.loadCSV2(3).subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.setTotal(parsedData.data[1]);
        }
      });
    });
  }

  setTotal(dados) {
    this.clearTotal();

    this.coronaService.loadCSV2(2).subscribe((data: any[]) => {
      Papa.parse(data, {
        complete: parsedData => {
          this.total.date = parsedData.data.reverse()[1][1];
        }
      });
    });
    this.total.totalCases = dados[2];
    this.total.totalCasesMS = dados[3];
    this.total.notConfirmedByMS = dados[4];
    this.total.deaths = dados[5];
  }

  clearTotal() {
    this.total.time = "0";
    this.total.notConfirmedByMS = 0;
    this.total.totalCases = 0;
    this.total.deaths = 0;
    this.total.totalCasesMS = 0;
  }
}
