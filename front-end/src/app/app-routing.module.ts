import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReservationComponent} from "./reservation/reservation.component";
import {HotelDetailsComponent} from "./view/hotel-details/hotel-details.component";
import {HotelListComponent} from "./view/hotel-list/hotel-list.component";
const appRoutes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelListComponent},
  {path: 'hotel-details/:id', component: HotelDetailsComponent},
  {path: 'reservation',component: ReservationComponent},
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
