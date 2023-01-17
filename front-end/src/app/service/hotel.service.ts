import {EventEmitter, Injectable} from '@angular/core';
import {Hotels} from "../model/hotel.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = 'http://localhost:8080/api/v1/hotels';
  constructor(private httpClient:HttpClient) { }
  getHotelsList():Observable<Hotels[]>{
    console.log(this.httpClient.get<Hotels[]>(`http://localhost:8080/api/v1/hotels`).subscribe(data => console.log(data)));
    return this.httpClient.get<Hotels[]>(`http://localhost:8080/api/v1/hotels`);
  }

  createHotel(hotel:Hotels):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,hotel);
  }
  getHotelById(id:number):Observable<Hotels>{
    return this.httpClient.get<Hotels>(`${this.baseURL}/${id}`);
  }
  updateHotel(id:number,hotel:Hotels):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,hotel);
  }
  deleteHotel(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
/*  hotels:Hotels[] = [
    new Hotels('Hotel 1', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'),
    new Hotels('Hotel 2', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'),
    new Hotels('Hotel 3', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'),
    new Hotels('Hotel 4', 'This is a test hotel', 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp')
  ];*/
/*
  hotelSelected=new EventEmitter<Hotels>();
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

