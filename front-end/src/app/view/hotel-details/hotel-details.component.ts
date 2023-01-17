import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../model/hotel.model";
import {HotelService} from "../../service/hotel.service";
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../../service/room.service";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{
  id: number;
  hotel: Hotel;
  rooms:RoomService;
  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.hotel = new Hotel();
    this.hotelService.getHotelById(this.id).subscribe(
      (data: Hotel)=>{
        this.hotel=data;
      }
    );

  }


}
