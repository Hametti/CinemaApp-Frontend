import { IScreeningHour } from "../iscreening-hour";
import { IMovieDTO } from "./imovie-dto";

export interface IScreeningDTO {
    id: number;
    movie: IMovieDTO;
    screeningHours: IScreeningHour[];
}
