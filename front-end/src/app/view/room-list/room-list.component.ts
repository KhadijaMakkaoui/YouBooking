import {Component, OnInit} from '@angular/core';
import {Room} from "../../model/room.model";
import {RoomService} from "../../service/room.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
id: number;
rooms: Room[];
  constructor(private roomService:RoomService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.roomService.getRoomsByHotelId(this.id).subscribe(
      (data: Room[])=>{
        this.rooms=data;
      }
    );
  }

}
