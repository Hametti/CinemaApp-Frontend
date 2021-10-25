import { IMovie } from "./IMovie";

export interface IUserDTO {
  email: string;
  name: string;
  subscription: boolean;
  discountMovie: IMovie;
}
