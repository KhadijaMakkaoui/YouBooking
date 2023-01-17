import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HeaderComponent } from './component/header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelComponent } from './hotels/hotel-list/hotel/hotel.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { CreatHotelComponent } from './hotels/creat-hotel/creat-hotel.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelDetailsComponent,
    HotelListComponent,
    HeaderComponent,
    ReservationComponent,
    HotelComponent,
    CreatHotelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
