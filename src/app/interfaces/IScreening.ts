import { IScreeningHour } from "./IScreening-hour";

export interface IScreening {
    movieId: number;
    movieTitle: string;
    pictureUrl: string;
    screeningHours: IScreeningHour[]
}
