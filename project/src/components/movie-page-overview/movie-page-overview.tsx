import React from 'react';
import { Film } from '../../types/films';

type MoviePageOverviewProps = {
  film: Film;
}

export default class MoviePageOverview extends React.Component<MoviePageOverviewProps> {
  render() {
    const { film } = this.props;

    return (
      <>
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
      </>
    );
  }
}
