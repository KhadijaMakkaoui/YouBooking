import { Component } from '@angular/core';
import {Hotels} from "./hotels.model";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  selectedHotel: Hotels;


}
