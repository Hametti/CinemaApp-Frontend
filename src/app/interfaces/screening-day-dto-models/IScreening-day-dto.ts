import { IScreeningDTO } from "./iscreening-dto";

export interface IScreeningDayDTO {
    id: number;
    date: string;
    screenings: IScreeningDTO[];
}
