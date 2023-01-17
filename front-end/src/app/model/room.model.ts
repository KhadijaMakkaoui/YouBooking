import {Hotel} from "./hotel.model";

export class RoomModel{
  id: number;
  diponible: boolean;
  numero: number;
  prix: number;
  hotel: Hotel;
}
