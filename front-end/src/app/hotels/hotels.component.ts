import {Component, OnInit} from '@angular/core';
import {Hotel} from "../model/hotel.model";
import {HotelService} from "../service/hotel.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers:[HotelService]
})
export class HotelsComponent implements OnInit{
  selectedHotel: Hotel;
  constructor(private hotelService:HotelService) { }
  ngOnInit(){
   /* this.hotelService.hotelSelected.subscribe(
      (hotel:Hotel)=>{
        this.selectedHotel=hotel;
      }
    )*/
  }


}
