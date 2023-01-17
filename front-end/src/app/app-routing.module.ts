import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReservationComponent} from "./reservation/reservation.component";
import {HotelListComponent} from "./view/hotel-list/hotel-list.component";
import {BookingComponent} from "./view/booking/booking.component";
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";
const appRoutes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelListComponent},
  {path: 'reservation',component: ReservationComponent},
  {path: 'booking/hotel/:id',component: BookingComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
