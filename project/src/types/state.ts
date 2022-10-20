import { Comment } from './comments';
import { Film } from './films';

export type State = {
  selectedFilm: Film | null,
  currentGenre: string,
  films: Film[],
  relatedFilms: Film[],
  favoriteFilms: Film[],
  reviews: Comment[],
  authorizationStatus: string,
  isDataLoaded: boolean,
  username: string,
};
