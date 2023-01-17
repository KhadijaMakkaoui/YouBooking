import {Component, Input} from '@angular/core';
import {Hotel} from "../../../model/hotel.model";
import {HotelService} from "../../../service/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
@Input() hotel: Hotel;
/*
@Input() index:number;
*/
  hotels: Hotel[] ;
  constructor(private hotelService: HotelService, private router:Router) { }

  hotelDetails(id:number){
    this.router.navigate(['hotel-details',id]);
  }
  updateHotel(id:number){
    this.router.navigate(['update-hotel',id]);
  }
  deleteHotel(id:number){
    this.hotelService.deleteHotel(id)
      .subscribe(
        (data: Hotel[])=>{
          this.hotels=data;
        }
      );
  }
}
