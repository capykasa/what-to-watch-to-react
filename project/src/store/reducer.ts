import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { clearFilmData, loadFilms, loadRelatedFilms, loadReviews, requireAuthorization, selectFilm } from './action';

const initialState: State = {
  selectedFilm: null,
  films: [],
  relatedFilms: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  username: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectFilm, (state, action) => {
      state.selectedFilm = action.payload.film;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadRelatedFilms, (state, action) => {
      state.relatedFilms = action.payload.films;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(clearFilmData, (state, action) => {
      state.selectedFilm = action.payload.selectedFilm;
      state.relatedFilms = action.payload.relatedFilms;
      state.reviews = action.payload.reviews;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      state.isDataLoaded = true;
    });
});

export { reducer };
