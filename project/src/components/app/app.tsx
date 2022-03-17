import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import AddReview from '../add-review/add-review';
import HistoryRouter from '../history-route/history-route';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory} >
      <Routes>
        <Route path={AppRoute.Main}
          element={
            <MainScreen />
          }
        />
        <Route path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              render={() => <MyList />}
            >
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}
          element={
            <MoviePage />
          }
        />
        <Route path={AppRoute.Player}
          element={<Player />}
        />
        <Route path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route element={<PageNotFound />} />
      </Routes>
    </HistoryRouter >
  );
}

export default App;
