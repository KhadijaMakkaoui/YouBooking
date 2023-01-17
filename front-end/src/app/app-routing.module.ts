import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReservationComponent} from "./reservation/reservation.component";
import {HotelListComponent} from "./view/hotel-list/hotel-list.component";
import {RoomListComponent} from "./view/room-list/room-list.component";
import {BookingComponent} from "./view/booking/booking.component";
const appRoutes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelListComponent},
  {path: 'reservation',component: ReservationComponent},
  {path: 'chambres/hotel/:id',component: RoomListComponent},
  {path: 'booking/hotel/:id',component: BookingComponent},
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
