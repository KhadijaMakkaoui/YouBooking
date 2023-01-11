import {Component, Input} from '@angular/core';
import {Hotels} from "../hotels.model";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {
@Input() hotelDetail: Hotels;
}
