import { IScreening } from "./IScreening";

export interface IScreeningDay {
    id: number;
    date: string;
    screenings: IScreening[];
}
