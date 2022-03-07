import { Film } from './films';

export enum ActionType {
  SelectFilm = 'films/selectedFilm',
}

export type SelectFilm = {
  type: ActionType.SelectFilm;
  payload: Film | null;
};

export type Actions =
  | SelectFilm;
