import {Component, Input} from '@angular/core';
import {Hotels} from "../hotels.model";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
@Input() h: Hotels = new Hotels('Hotel 1', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp');
}
