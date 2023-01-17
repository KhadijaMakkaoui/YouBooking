import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './view/hotel-details/hotel-details.component';
import { HeaderComponent } from './component/header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { CreatHotelComponent } from './hotels/creat-hotel/creat-hotel.component';
import { FooterComponent } from './component/footer/footer.component';
import {HotelComponent} from "./view/hotel-list/hotel/hotel.component";
import {HotelListComponent} from "./view/hotel-list/hotel-list.component";
import { RoomListComponent } from './view/room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelDetailsComponent,
    HeaderComponent,
    ReservationComponent,
    HotelComponent,
    HotelListComponent,
    CreatHotelComponent,
    FooterComponent,
    RoomListComponent,
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
