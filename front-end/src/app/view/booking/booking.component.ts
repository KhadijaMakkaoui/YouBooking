import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Booking} from "../../model/booking.model";
import {BookingService} from "../../service/booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  id:number;
  booking:Booking=new Booking();
  constructor(private router: Router,private route:ActivatedRoute,private bookingService:BookingService) { }

  save() {
    this.id = this.route.snapshot.params['id'];
    this.bookingService.createBooking(this.booking,this.id)
      .subscribe(
      data => {
        console.log(data);
        this.goToHotelsList();
      }
    )
  }

  private goToHotelsList() {
    this.router.navigate(['/hotels']);
  }
  onSubmit() {
    console.log(this.booking);
    this.save();
  }
}
