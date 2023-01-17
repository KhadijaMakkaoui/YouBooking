import {Component, Input, OnInit} from '@angular/core';
import {Hotels} from "../../model/hotel.model";
import {ActivatedRoute, Params} from "@angular/router";
import {HotelService} from "../../service/hotel.service";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{
@Input() hotelDetail: Hotels;
id: number | undefined;
constructor(private hotelService:HotelService, private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
/*
        this.hotelDetail=this.hotelService.getHotel(this.id);
*/
      }
    )
  }
}
