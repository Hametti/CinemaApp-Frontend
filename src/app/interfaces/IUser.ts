import { IMovie } from "./IMovie";

export interface IUser {
  login: string;
  name: string;
  subscription: boolean;
  uniqueDiscount: IMovie;
  uniqueDiscountValue: number;
}
