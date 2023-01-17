import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../model/room.model";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseURL = 'http://localhost:8080/api/v1/chambres';
  constructor(private httpClient:HttpClient) { }
  getRoomsList():Observable<Room[]>{
    console.log(this.httpClient.get<Room[]>(`http://localhost:8080/api/v1/chambres`).subscribe(data => console.log(data)));
    return this.httpClient.get<Room[]>(`${this.baseURL}`);
  }

  createRoom(room:Room):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,room);
  }
  getRoomById(id:number):Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/${id}`);
  }
  getRoomsByHotelId(id:number):Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL}/hotel/${id}`);
  }
  updateRoom(id:number,room:Room):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,room);
  }
  deleteRoom(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
