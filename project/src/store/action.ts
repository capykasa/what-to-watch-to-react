import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { ActionType } from '../types/actions';
import { Comment } from '../types/comments';
import { Film } from '../types/films';

export const selectFilm = createAction(
  ActionType.SelectFilm,
  (film: Film, id: number) => ({
    payload: { film, id },
  }),
);

export const selectGenre = createAction(
  ActionType.SelectGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

export const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

export const loadRelatedFilms = createAction(
  ActionType.LoadRelatedFilms,
  (films: Film[], id: number) => ({
    payload: { films, id },
  }),
);

export const loadFavoriteFilms = createAction(
  ActionType.LoadFavoriteFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Comment[]) => ({
    payload: reviews,
  }),
);

export const clearFilmData = createAction(
  ActionType.ClearFilmData,
  (selectedFilm: null, reviews: [], relatedFilms: []) => ({
    payload: { selectedFilm, reviews, relatedFilms },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const setUsername = createAction(
  ActionType.SetUsername,
  (name: string) => ({
    payload: name,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
