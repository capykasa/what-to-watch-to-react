/* eslint-disable no-console */
import { Comment } from '../../types/comments';
import { Film } from '../../types/films';
import Footer from '../footer/footer';
import HeaderAccount from '../header-account/header-account';
import HeaderButton from '../header-button/header-button';
import HeaderFilm from '../header-film/header-film';
import PageNotFound from '../page-not-found/page-not-found';
import RelatedMovies from '../related-movies/related-movies';

type MoviePageProps = {
  films: Film[];
  comments: Comment[],
}

function MoviePage(props: MoviePageProps): JSX.Element {
  const { films, comments } = props;
  console.log(films, comments);

  const currentFilmId = parseInt(document.location.pathname.replace('/films/:', ''), 10);
  const film = films.find((item) => item.id === currentFilmId);

  if (!film) {
    return <PageNotFound />;
  }

  return (
    <>
      <HeaderButton />
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.previewImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeaderAccount />
          <HeaderFilm />
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{film.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.description}</p>

                <p className="film-card__director"><strong>Director: {film.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <RelatedMovies />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
