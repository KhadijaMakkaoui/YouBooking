import {EventEmitter, Injectable} from '@angular/core';
import {Hotels} from "./hotels.model";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  hotels:Hotels[] = [
    new Hotels('Hotel 1', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'),
    new Hotels('Hotel 2', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'),
    new Hotels('Hotel 3', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'),
    new Hotels('Hotel 4', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp')
  ];
  hotelSelected=new EventEmitter<Hotels>();
  constructor() { }
  getHotels(){
    //get a copy of the array
    return this.hotels.slice();
  }
  getHotel(index:number){
    return this.hotels[index];
  }
}
