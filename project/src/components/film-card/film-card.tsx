import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../..';
import { fetchSelectedFilmAction } from '../../store/api-actions';
import { Film } from '../../types/films';

type FilmCardProps = {
  film: Film;
}

type MyState = {
  isSelect: boolean;
}

export default class FilmCard extends React.Component<FilmCardProps> {

  state: MyState = {
    isSelect: false,
  };

  render() {
    const { film } = this.props;

    return (
      <>
        <div
          className="small-film-card__image"
          onPointerEnter={() => {
            this.setState({ isSelect: true });
          }}
          onPointerLeave={() => {
            this.setState({ isSelect: false });
          }}
        >
          {this.state.isSelect
            ? <video src={film.previewVideoLink} width="280" height="175" autoPlay muted loop />
            : <img src={film.previewImage} alt={film.name} width="280" height="175" />}
        </div>
        <h3 className="small-film-card__title">
          <Link
            className="small-film-card__link"
            to={`/films/:${film.id}`}
            onClick={() => {
              store.dispatch(fetchSelectedFilmAction(film.id));
            }}
          >
            {film.name}
          </Link>
        </h3>
      </>
    );
  }
}
