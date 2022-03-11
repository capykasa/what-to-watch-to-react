import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Comment } from '../../types/comments';
import { Film } from '../../types/films';
import AddReview from '../add-review/add-review';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';

type AppScreenProps = {
  films: Film[],
  comments: Comment[],
}

function App({ films, comments }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
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
              render={() => <MyList films={films} />}
            >
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}
          element={
            <MoviePage
              comments={comments}
            />
          }
        />
        <Route path={AppRoute.Player}
          element={<Player films={films} />}
        />
        <Route path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
