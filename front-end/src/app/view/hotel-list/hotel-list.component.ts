import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Hotels} from "../../model/hotel.model";
import {HotelService} from "../../service/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{
  hotels: Hotels[] ;
  constructor(private hotelService: HotelService, private router:Router) { }
  ngOnInit(): void {
    this.hotelService.getHotelsList().subscribe(
      (data: Hotels[])=>{
        this.hotels=data;
      });;
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
          console.log(data);
          this.getHotelsList()
        }
      );
  }

}
/*  @Output() hotelWasSelected = new EventEmitter<Hotels>();
  hotels:Hotels[] = [];
  constructor(private hotelService:HotelService) { }
  ngOnInit() {
    this.hotels = this.hotelService.getHotels();
  }*/
