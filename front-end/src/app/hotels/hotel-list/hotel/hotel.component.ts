import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hotels} from "../../hotels.model";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
@Input() hotel: Hotels;
@Output() hotelSelected = new EventEmitter<void>();
onSelected() {
  this.hotelSelected.emit();
}
}
