import {Component, OnInit} from '@angular/core';
import {Hotels} from "./hotels.model";
import {HotelsService} from "./hotels.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
  providers:[HotelsService]
})
export class HotelsComponent implements OnInit{
  selectedHotel: Hotels;
  constructor(private hotelService:HotelsService) { }
  ngOnInit(){
    this.hotelService.hotelSelected.subscribe(
      (hotel:Hotels)=>{
        this.selectedHotel=hotel;
      }
    )
  }


}
