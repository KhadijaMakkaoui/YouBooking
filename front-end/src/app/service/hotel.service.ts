import {EventEmitter, Injectable} from '@angular/core';
import {Hotel} from "../model/hotel.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = 'http://localhost:8080/api/v1/hotels';
  constructor(private httpClient:HttpClient) { }
  getHotelsList():Observable<Hotel[]>{
    console.log(this.httpClient.get<Hotel[]>(`http://localhost:8080/api/v1/hotels`).subscribe(data => console.log(data)));
    return this.httpClient.get<Hotel[]>(`http://localhost:8080/api/v1/hotels`);
  }

  createHotel(hotel:Hotel):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,hotel);
  }
  getHotelById(id:number):Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}/${id}`);
  }
  updateHotel(id:number,hotel:Hotel):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,hotel);
  }
  deleteHotel(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
/*  hotels:Hotel[] = [
    new Hotel('Hotel 1', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'),
    new Hotel('Hotel 2', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'),
    new Hotel('Hotel 3', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'),
    new Hotel('Hotel 4', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp')
  ];*/
/*
  hotelSelected=new EventEmitter<Hotel>();
*/
/*
  constructor() { }
*/
  /*getHotels(){
    //get a copy of the array
    return this.hotels.slice();
  }
  getHotel(index:number){
    return this.hotels[index];
  }*/

