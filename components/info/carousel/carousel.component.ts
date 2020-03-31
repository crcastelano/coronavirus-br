import { Component, OnInit } from "@angular/core";
@Component({
  selector: "crc-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
    // {
    //   event: " Event 1",
    //   eventLocation: "Bangalore",
    //   eventDescription:
    //     "In bangalore, first event is going to happen. Please be careful about it",
    //   img: "https://www.unasus.gov.br/uploads/especial/covid19/imagem/cuidadosCoronavirus01.svg",
    //   eventStartDate: new Date("2019/05/20"),
    //   eventEndingDate: new Date("2019/05/24")
    // },

  date1: Date = new Date("2017/07/10");
  date2: Date = new Date("2017/07/14");

  event_list = [
    {
      event: " Event 1",
      eventLocation: "",
      eventDescription: "",
        // "Lave as mãos com frequência, com água e sabão ou então higienize com álcool em gel 70%",
      img: "https://www.castelano.com.br/covid/covid1.png",
      eventStartDate: this.date1,
      eventEndingDate: this.date2
    },
    {
      event: " Event 2",
      eventLocation: "",
      eventDescription:
        "Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos.",
      img: "https://www.castelano.com.br/covid/covid2.png",
      eventStartDate: this.date1,
      eventEndingDate: this.date2
    },
    {
      event: " Event 3",
      eventLocation: "",
      eventDescription: "Se estiver doente, evite contato físico com outras pessoas e ﬁque em casa até melhorar.",
      img: "https://www.castelano.com.br/covid/covid3.png",
      eventStartDate: this.date1,
      eventEndingDate: this.date2
    },
    {
      event: " Event 4",
      eventLocation: "",
      eventDescription: "Evite tocar olhos, nariz e boca com as mãos não lavadas. Ao tocar, lave sempre as mãos como já indicado.",
      img: "https://www.castelano.com.br/covid/covid4.png",
      eventStartDate: this.date1,
      eventEndingDate: this.date2
    },
    {
      event: " Event 5",
      eventLocation: "",
      eventDescription: "Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos.",
      img: "https://www.castelano.com.br/covid/covid5.png",
      eventStartDate: this.date1,
      eventEndingDate: this.date2
    },
    {
      event: " Event 6",
      eventLocation: "",
      eventDescription: "Evite aglomerações e mantenha os ambientes ventilados.",
      img: "https://www.castelano.com.br/covid/covid6.png",
      eventStartDate: this.date1,
      eventEndingDate: this.date2
    },
  ];

  upcoming_events = this.event_list.filter(
    event => event.eventStartDate > new Date()
  );
  past_events = this.event_list.filter(
    event => event.eventEndingDate < new Date()
  );
  current_events = this.event_list.filter(
    event =>
      event.eventStartDate >= new Date() && event.eventEndingDate <= new Date()
  );
  constructor() {}

  ngOnInit() {}
}
