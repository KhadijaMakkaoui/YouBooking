import {Hotel} from "./hotel.model";

export class Booking{
  id: number;
  dateDebut: Date;
  dateFin: Date;
  prix: number;
  hotel: Hotel;

}
