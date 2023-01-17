import {Component, Input} from '@angular/core';
import {Hotels} from "../../../model/hotel.model";
import {HotelService} from "../../../service/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
@Input() hotel: Hotels;
@Input() index:number;
  hotels: Hotels[] ;
  constructor(private hotelService: HotelService, private router:Router) { }
  ngOnInit(): void {
    this.hotelService.getHotelsList();
  }
  private getHotelsList(){
    this.hotelService.getHotelsList()
      .subscribe(
        (data: Hotels[])=>{
          this.hotels=data;
        });
  }
  hotelDetails(id:number){
    this.router.navigate(['hotel-details',id]);
  }
  updateHotel(id:number){
    this.router.navigate(['update-hotel',id]);
  }
  deleteHotel(id:number){
    this.hotelService.deleteHotel(id)
      .subscribe(
        (data: Hotels[])=>{
          this.hotels=data;
        }
      );
  }
}
