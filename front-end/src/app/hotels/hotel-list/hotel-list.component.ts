import {Component, EventEmitter, Output} from '@angular/core';
import {Hotels} from "../hotels.model";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  @Output() hotelWasSelected = new EventEmitter<Hotels>();
  hotels:Hotels[] = [
    new Hotels('Hotel 1', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'),
    new Hotels('Hotel 2', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'),
    new Hotels('Hotel 3', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'),
    new Hotels('Hotel 4', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp')
  ];
  constructor() { }

  onHotelSelected(h: Hotels) {
    this.hotelWasSelected.emit(h);
  }
}
