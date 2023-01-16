import {Component, Input, OnInit} from '@angular/core';
import {Hotels} from "../hotels.model";
import {ActivatedRoute, Params} from "@angular/router";
import {HotelsService} from "../hotels.service";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{
@Input() hotelDetail: Hotels;
id: number | undefined;
constructor(private hotelService:HotelsService,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.hotelDetail=this.hotelService.getHotel(this.id);
      }
    )
  }
}
