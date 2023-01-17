import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Booking} from "../../model/booking.model";
import {BookingService} from "../../service/booking.service";
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Book this hotel'
    }).then((result) => {
      if (result.isConfirmed) {

        this.id = this.route.snapshot.params['id'];
        this.bookingService.createBooking(this.booking,this.id)
          .subscribe(
            data => {
              console.log(data);
              Swal.fire(
                'Your booking succeeded!',
                'Your reservation is confirmed',
                'success'
              )
              this.goToHotelsList();
            }
          )

      }
    })

  }

  private goToHotelsList() {
    this.router.navigate(['/hotels']);
  }
  onSubmit() {
    console.log(this.booking);
    this.save();

  }
}
