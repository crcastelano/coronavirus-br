import { NgModule } from "@angular/core";
import { CovalentCommonModule } from "@covalent/core/common";
import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentMediaModule } from "@covalent/core/media";

@NgModule({
  imports: [
    CovalentCommonModule, 
    CovalentLayoutModule, 
    CovalentMediaModule
  ],
  exports: [
    CovalentCommonModule, 
    CovalentLayoutModule, 
    CovalentMediaModule
  ]
})
export class CovalentModule {}
