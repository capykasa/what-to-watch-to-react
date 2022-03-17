import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { clearFilmData, loadFilms, loadRelatedFilms, loadReviews, requireAuthorization, requireLogout, selectFilm, setUsername } from './action';

const initialState: State = {
  selectedFilm: null,
  films: [],
  relatedFilms: [],
  favoriteFilms: [],
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
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUsername, (state, action) => {
      state.username = action.payload;
    });
});

export { reducer };
