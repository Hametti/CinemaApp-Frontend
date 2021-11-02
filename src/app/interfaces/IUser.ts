import { IMovie } from "./IMovie";
import { IReservation } from "./IReservation";

export interface IUser {
  email: string;
  name: string;
  subscription: boolean;
  uniqueDiscountMovie: IMovie;
  uniqueDiscountValue: number;
  reservations: IReservation[];
}
