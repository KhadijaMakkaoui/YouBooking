import {Component, EventEmitter, Output} from '@angular/core';
import {Hotels} from "../hotels.model";
import {HotelsService} from "../hotels.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  @Output() hotelWasSelected = new EventEmitter<Hotels>();
  hotels:Hotels[] = [];
  constructor(private hotelService:HotelsService) { }
  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
  }
  onHotelSelected(h: Hotels) {
    this.hotelWasSelected.emit(h);
  }
}
