import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HotelsComponent} from "./hotels/hotels.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {HotelDetailsComponent} from "./hotels/hotel-details/hotel-details.component";
const appRoutes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelsComponent,children: [
      {path: 'hotels/:id', component: HotelDetailsComponent}
    ]},
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
