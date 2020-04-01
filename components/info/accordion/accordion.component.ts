import { Component } from '@angular/core';

@Component({
  selector: "crc-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"]
})
export class AccordionComponent {
  url="https://castelano.com.br/covid/";
  dados = [
    {
      header: "O que é coronavírus? (COVID-19)",
      content: "Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19). Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa. A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1..."
    },
    {
      header: "Como é transmitido ?",
      content: "A transmissão acontece de uma pessoa doente para outra ou por contato próximo, por meio de:",
      image: "transmissao.png",
    },
    {
      header: "Quais são os sintomas ?",
      content: "Os sintomas mais comuns são febre e tosse ou dificuldade para respirar.",
      image: "sintomas.png",
    },
    {
      header: "Comparativo entre doenças respiratórias:",
      content: "",
      image: "comparativo.png",
    },
    {
      header: "Estou com sintomas de gripe. O que devo fazer?",
      content: "Se você está com sintomas de gripe, fique em casa por 14 dias e siga as orientações do Ministério da Saúde para o isolamento domiciliar. Só procure um hospital de referência se estiver com falta de ar.",
      image: "",
    },
    {
      header: "Há um caso de coronavírus confirmado na minha casa. Como fazer o isolamento domiciliar?", 
      content: "Pessoas com diagnóstico confirmado de coronavírus precisam ficar em isolamento domiciliar. Veja como proteger sua família:",
      image: "comparativo.png",
    },
    {
      header: "Quem corre mais risco ?",
      content: "Pessoas acima dos 60 anos e aquelas com doenças crônicas, como diabetes e doenças cardiovasculares. Esse público não deve viajar nem frequentar cinemas, shopping, shows e outros locais com aglomerações. A orientação é FICAR EM CASA. Caso utilize medicamento de uso contínuo, entre em contato com seu médico ou peça para algum familiar ir até o posto de saúde para buscar uma receita com validade ampliada, principalmente no período de outono e inverno. Isso reduz o trânsito desnecessário nos postos de saúde e farmácias.", 
      image: "",
    },
    {
      header: "Quando usar máscara?",
      content: "Use máscara se estiver tossindo ou espirrando para evitar transmitir vírus para outras pessoas. Para pessoas saudáveis, use máscara somente se estiver cuidando de uma pessoa com doenças respiratórias. As máscaras são eficazes somente quando usadas em combinação com a limpeza frequente das mãos com água e sabão ou higienizadas com álcool em gel 70%. Após usar a máscara, descarte-a em local adequado e lave as mãos. Em todas as situações recomendadas, utilize a máscara do tipo cirúrgico. A máscara N95 é  de uso dos profissionais de saúde e é fundamental para sua proteção. Há risco de faltar, caso a população compre também.",
      image: "",
    },
    {
      header: "Já existe vacina contra o coronavírus (COVID-19)?",
      content: "Não há vacina disponível até o momento, mas estudos já estão em andamento.",
      image: "vacina.png",
    },
    {
      header: "Já existe tratamento contra o coronavírus (COVID-19)?",
      content: "Não há tratamento específico. Os médicos tratam os sintomas para evitar o agravamento da doença e reduzir o desconforto. O Ministério da Saúde criou um protocolo para o uso dos medicamentos cloroquina e hidroxicloroquina para pacientes internados com casos graves de coronavírus. Isso mesmo, só para pacientes graves internados. Tanto a cloroquina quanto a hidroxicloroquina não são indicadas para prevenir a doença e nem tratar casos leves. O Ministério da Saúde alerta sobre os riscos da automedicação. Por ser uma doença nova, ainda não há evidências científicas suficientes que comprovem a eficácia dos medicamentos para os casos de coronavírus. Porém, há estudos promissores que demonstram o benefício do uso em pacientes graves.",
      image: "",
    },
    {
      header: "Adianta tomar a vacina contra a gripe ?",
      content: "Não, mas evita que a pessoa tenha outros tipos de doenças respiratórias.",
      image: "",
    },
    {
      header: "Há riscos maiores para grávidas ?",
      content: "Ainda não existem dados específicos, mas elas passam por mudanças imunológicas que podem deixá-las mais vulneráveis.",
      image: "gravida.png",
    },
    {
      header: "Vitaminas D e C ou água com limão previnem o coronavírus (COVID-19)?",
      content: "Nenhuma delas. Não existe vitamina, terapia alternativa ou remédio licenciado capaz de evitar o contágio ou tratar a doença. ",
      image: "vitamina.jpg",
    },
    {
      header: "Animais de estimação transmitem coronavírus (COVID-19)?",
      content: "Ainda não existem evidências nesse sentido.",
      image: "animais.png",
    },
    {
      header: "",
      content: "",
      image: "",
    },
    {
      header: "",
      content: "",
      image: "",
    },
  ];

  constructor() {
  }

}