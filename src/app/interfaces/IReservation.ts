import { IScreening } from "./screening-day-models/IScreening";
import { ISeat } from "./screening-models/ISeat";

export interface IReservation {
  screeningDayId: number;
  date: string;
  screening: IScreening;
  screeningId: number;
  seats: ISeat[];
  }
