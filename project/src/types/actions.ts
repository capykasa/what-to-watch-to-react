import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from './state';
import {
  selectFilm,
  loadFilms,
  loadRelatedFilms,
  loadFavoriteFilms,
  loadReviews,
  clearFilmData,
  requireAuthorization,
  setUsername,
  requireLogout,
  redirectToRoute
} from '../store/action';

export enum ActionType {
  SelectFilm = 'films/selectedFilm',
  LoadFilms = 'data/loadFilms',
  LoadRelatedFilms = 'data/loadRelatedFilms',
  LoadFavoriteFilms = 'data/loadFavoriteFilms',
  LoadReviews = 'data/loadReviews',
  ClearFilmData = 'data/clearFilmData',
  RequireAuthorization = 'user/requireAuthorization',
  SetUsername = 'setUsername',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof selectFilm>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadRelatedFilms>
  | ReturnType<typeof loadFavoriteFilms>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof clearFilmData>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof setUsername>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
