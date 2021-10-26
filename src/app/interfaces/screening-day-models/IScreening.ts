import { IScreeningHour } from "../IScreening-hour";
import { IMovieDTO } from "./IMovie-dto";
import { ISeat } from "../screening-models/ISeat"

export interface IScreening {
    id: number;
    movie: IMovieDTO;
    screeningHours: IScreeningHour[];
    seats: ISeat[];
}
