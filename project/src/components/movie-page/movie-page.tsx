import React from 'react';
import { Link } from 'react-router-dom';
import { MoviePageNavigate } from '../../const';
import { Comment } from '../../types/comments';
import { Film } from '../../types/films';
import Footer from '../footer/footer';
import HeaderAccount from '../header-account/header-account';
import HeaderButton from '../header-button/header-button';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import PageNotFound from '../page-not-found/page-not-found';
import RelatedMovies from '../related-movies/related-movies';

type MoviePageProps = {
  films: Film[];
  comments: Comment[],
}

type MyState = {
  selectedNavigateName: string;
}

export default class MoviePage extends React.Component<MoviePageProps, MyState> {
  constructor(props: MoviePageProps) {
    super(props);

    this.state = {
      selectedNavigateName: 'Overview',
    };
  }

  DisplayNavigatePage = (pageName: string, film: Film, comments: Comment[]) => {
    if (pageName === 'Details') {
      return <MoviePageDetails film={film} />;
    }
    if (pageName === 'Reviews') {
      return <MoviePageReviews comments={comments} />;
    }
    return <MoviePageOverview film={film} />;
  };

  render() {
    const { films, comments } = this.props;

    const currentPathName = document.location.pathname;
    const currentFilmId = parseInt(currentPathName.replace('/films/:', ''), 10);
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

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={`/films/${film.id}/review`}
                    className="btn film-card__button"
                    type='button'
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    {Object.values(MoviePageNavigate).map((item: string) => (
                      <li key={item} className={this.state.selectedNavigateName === item ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
                        <Link to=''
                          onClick={() => {
                            this.setState({ selectedNavigateName: item });
                          }}
                          className="film-nav__link"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {this.DisplayNavigatePage(this.state.selectedNavigateName, film, comments)}

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
}
