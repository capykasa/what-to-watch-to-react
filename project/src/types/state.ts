import { Film } from './films';

export type State = {
  selectedFilm: Film | null,
  films: Film[],
};
