import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { State } from '../types/state';
import { selectFilm } from './action';

const initialState: State = {
  selectedFilm: null,
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectFilm, (state, action) => {
      state.selectedFilm = action.payload;
    });
});

export { reducer };
