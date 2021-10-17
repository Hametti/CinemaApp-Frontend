import { IProgrammeMovieDTO } from "./iprogramme-movie-dto";

export interface IDailyView {
  date: string;
  movieList: IProgrammeMovieDTO[];
}
