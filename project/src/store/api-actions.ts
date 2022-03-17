import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/actions';
import { AuthData } from '../types/auth-data';
import { Comment } from '../types/comments';
import { Film } from '../types/films';
import { adaptFilmToClient } from '../utils';
import { loadFilms, loadRelatedFilms, loadReviews, redirectToRoute, requireAuthorization, requireLogout, selectFilm, setUsername } from './action';

const AUTH_FAIL_MESSAGE = 'Log In. Please.';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film[]>(APIRoute.Films);

    const adaptedDate = data.map((item) => (adaptFilmToClient(item)));

    dispatch(loadFilms(adaptedDate));
  };

export const fetchSelectedFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);

    const adaptedDate = (adaptFilmToClient(data));

    dispatch(selectFilm(adaptedDate, id));
  };

export const fetchReviewAction = (id: number): ThunkActionResult =>
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

export const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film[]>(APIRoute.Favorite);

    const adaptedDate = data.map((item) => (adaptFilmToClient(item)));

    dispatch(loadFilms(adaptedDate));
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

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUsername(email));
    dispatch(redirectToRoute(AppRoute.Main));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
