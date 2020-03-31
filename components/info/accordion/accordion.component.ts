import { Component } from '@angular/core';

@Component({
  selector: "crc-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"]
})
export class AccordionComponent {
  dados = [
    {
      header: "O que é coronavírus? (COVID-19)",
      content: "Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19). Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa. A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1..."
    },
    {
      header: "Como prevenir o contágio?",
      content: "- Lave as mãos com água e sabão ou use álcool em gel. - Cubra o nariz e boca ao espirrar ou tossir. - Evite aglomerações se estiver doente. - Mantenha os ambientes bem ventilados. - Não compartilhe objetos pessoais."
    },
  ];

  constructor() {
  }

}