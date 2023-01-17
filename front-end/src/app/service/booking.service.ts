import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../model/booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = 'http://localhost:8080/reservation';
  constructor(private httpClient:HttpClient) { }
  getBookingsList():Observable<Booking[]>{
    console.log(this.httpClient.get<Booking[]>(`http://localhost:8080/reservation`).subscribe(data => console.log(data)));
    return this.httpClient.get<Booking[]>(`${this.baseURL}`);
  }

  createBooking(booking:Booking,idHotel:number):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/hotel/${idHotel}`,booking);
  }
  getBookingById(id:number):Observable<Booking>{
    return this.httpClient.get<Booking>(`${this.baseURL}/${id}`);
  }
  updateBooking(id:number,booking:Booking):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,booking);
  }
  deleteBooking(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
