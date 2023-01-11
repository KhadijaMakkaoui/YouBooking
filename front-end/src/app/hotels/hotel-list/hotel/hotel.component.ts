import {Component, Input} from '@angular/core';
import {Hotels} from "../../hotels.model";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
@Input() hotel: Hotels;
}
