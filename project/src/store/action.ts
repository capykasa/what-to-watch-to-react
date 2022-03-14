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

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Comment[]) => ({
    payload: reviews,
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

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
