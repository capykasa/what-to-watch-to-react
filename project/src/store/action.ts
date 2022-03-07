import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/actions';
import { Film } from '../types/films';

export const selectFilm = createAction(
  ActionType.SelectFilm,
  (film: Film | null) => ({
    payload: film,
  }),
);
