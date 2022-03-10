import { Comment } from './comments';
import { Film } from './films';

export type State = {
  selectedFilm: Film | null,
  films: Film[],
  relatedFilms: Film[],
  relatedFilmsForId: number | null,
  reviews: Comment[],
  authorizationStatus: string,
  isDataLoaded: boolean,
  username: string,
};
