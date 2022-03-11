import { Comment } from './comments';
import { Film } from './films';

export type State = {
  selectedFilm: Film | null,
  films: Film[],
  relatedFilms: Film[],
  reviews: Comment[],
  authorizationStatus: string,
  isDataLoaded: boolean,
  username: string,
};
