import { IScreening } from "./screening-day-models/IScreening";

export interface IAddReservationData {
    screeningDayId: number;
    date: string;
    screening: IScreening;
    screeningId: number;
}