import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HotelsComponent} from "./hotels/hotels.component";
import {ReservationComponent} from "./reservation/reservation.component";
const appRoutes: Routes = [
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
  {path: 'hotels', component: HotelsComponent},
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
