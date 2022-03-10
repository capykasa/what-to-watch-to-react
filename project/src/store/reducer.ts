import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { loadFilms, loadRelatedFilms, loadReviews, requireAuthorization, selectFilm } from './action';

const initialState: State = {
  selectedFilm: null,
  films: [],
  relatedFilms: [],
  relatedFilmsForId: null,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  username: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectFilm, (state, action) => {
      state.selectedFilm = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadRelatedFilms, (state, action) => {
      state.relatedFilms = action.payload.films;
      state.relatedFilmsForId = action.payload.id;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      state.isDataLoaded = true;
    });
});

export { reducer };
