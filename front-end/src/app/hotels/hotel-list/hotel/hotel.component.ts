import {Component, Input} from '@angular/core';
import {Hotels} from "../../hotels.model";
import {HotelsService} from "../../hotels.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
@Input() hotel: Hotels;
@Input() index: number;
constructor(private hotelService:HotelsService) { }

}
