import {Component, OnInit} from '@angular/core';
import {Hotels} from "../model/hotel.model";
import {HotelService} from "../service/hotel.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers:[HotelService]
})
export class HotelsComponent implements OnInit{
  selectedHotel: Hotels;
  constructor(private hotelService:HotelService) { }
  ngOnInit(){
   /* this.hotelService.hotelSelected.subscribe(
      (hotel:Hotels)=>{
        this.selectedHotel=hotel;
      }
    )*/
  }


}
