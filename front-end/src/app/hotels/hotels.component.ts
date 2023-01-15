import { Component } from '@angular/core';
import {Hotels} from "./hotels.model";
import {HotelsService} from "./hotels.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers:[HotelsService]
})
export class HotelsComponent {
  selectedHotel: Hotels;


}
