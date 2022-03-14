import React from 'react';
import { Link } from 'react-router-dom';
import { MoviePageNavigate } from '../../const';
import { Comment } from '../../types/comments';
import { Film } from '../../types/films';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeaderButton from '../header-button/header-button';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import FilmCard from '../film-card/film-card';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { store } from '../..';
import { fetchRelatedFilmsAction, fetchReviewAction, fetchSelectedFilmAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';

const MAX_COUNT_RELATED_FILMS = 4;

type MyState = {
  currentFilmId: number,
  selectedNavigateName: string;
}

const mapStateToProps = ({ selectedFilm, reviews, relatedFilms }: State) => ({
  selectedFilm,
  reviews,
  relatedFilms,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class MoviePage extends React.Component<PropsFromRedux, MyState> {
  constructor(props: PropsFromRedux) {
    super(props);

    this.state = {
      currentFilmId: parseInt(document.location.pathname.replace('/films/:', ''), 10),
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

  componentDidMount() {
    store.dispatch(fetchSelectedFilmAction(this.state.currentFilmId));
    store.dispatch(fetchReviewAction(this.state.currentFilmId));
    store.dispatch(fetchRelatedFilmsAction(this.state.currentFilmId));
  }

  render() {
    const { selectedFilm, relatedFilms, reviews } = this.props;

    const relatedFilmsForView = relatedFilms.slice(0, MAX_COUNT_RELATED_FILMS);

    if (!selectedFilm) {
      return (
        <header className="page-header film-card__head">
          <Logo />
          <LoadingScreen />;
        </header>
      );
    }

    return (
      <>
        <HeaderButton />
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={selectedFilm.previewImage} alt={selectedFilm.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{selectedFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{selectedFilm.genre}</span>
                  <span className="film-card__year">{selectedFilm.released}</span>
                </p>

                <div className="film-card__buttons">
                  <Link to={`/player/:${selectedFilm.id}`}
                    className="btn btn--play film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    Play
                  </Link>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={`/films/${selectedFilm.id}/review`}
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
                <img src={selectedFilm.posterImage} alt={`${selectedFilm.name} poster`} width="218" height="327" />
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

                {this.DisplayNavigatePage(this.state.selectedNavigateName, selectedFilm, reviews)}

              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__films-list">
              {relatedFilmsForView
                ? relatedFilmsForView.map((film: Film) => (
                  <article
                    className="small-film-card catalog__films-card"
                    key={film.id}
                  >
                    <FilmCard
                      film={film}
                    />
                  </article>
                ))
                : ''}
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(MoviePage);
