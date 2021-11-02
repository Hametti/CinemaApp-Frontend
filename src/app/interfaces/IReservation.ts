import { ISeat } from "./ISeat";

export interface IReservation {
  id: number;
  date: string;
  reservationHour: string;
  screeningId: number;
  movieTitle: string;
  reservedSeats: ISeat[];
  }
