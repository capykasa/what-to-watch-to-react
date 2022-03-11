import { APIRoute, AuthorizationStatus } from '../const';
import { ThunkActionResult } from '../types/actions';
import { Comment } from '../types/comments';
import { Film } from '../types/films';
import { adaptFilmToClient } from '../utils';
import { loadFilms, loadRelatedFilms, loadReviews, requireAuthorization, setUsername } from './action';

const AUTH_FAIL_MESSAGE = 'Log In. Please.';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film[]>(APIRoute.Films);

    const adaptedDate = data.map((item) => (adaptFilmToClient(item)));

    dispatch(loadFilms(adaptedDate));
  };

export const fetchReviewAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Reviews}/${id}`);

    dispatch(loadReviews(data));
  };

export const fetchRelatedFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);

    const adaptedDate = data.map((item) => (adaptFilmToClient(item)));

    dispatch(loadRelatedFilms(adaptedDate, id));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.get(APIRoute.Login);
      dispatch(setUsername(data.email));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      // eslint-disable-next-line no-console
      console.log(AUTH_FAIL_MESSAGE);
    }
  };
