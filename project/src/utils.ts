import { Film } from './types/films';

export const adaptFilmToClient = (item: any): Film => (
  {
    description: item['description'],
    id: item['id'],
    backgroundColor: item['background_color'],
    backgroundImage: item['background_image'],
    previewImage: item['preview_image'],
    posterImage: item['poster_image'],
    videoLink: item['video_link'],
    previewVideoLink: item['preview_video_link'],
    name: item['name'],
    starring: item['starring'],
    director: item['director'],
    rating: item['rating'],
    genre: item['genre'],
    released: item['released'],
    isFavorite: item['is_favorite'],
    runTime: item['run_time'],
    scoresCount: item['scores_count'],
  }
);

export const createGenresList = (items: Film[]): string[] => [...new Set(items.map((film) => film.genre))];
