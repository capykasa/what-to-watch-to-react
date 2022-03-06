import React from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}

type MyState = {
  selectedFilm: Film | null;
}

export default class FilmsList extends React.Component<FilmsListProps, MyState> {
  constructor(props: FilmsListProps) {
    super(props);

    this.state = {
      selectedFilm: null,
    };
  }

  render() {
    const { films } = this.props;
    return (
      <div className="catalog__films-list">
        {films.map((film: Film) => (
          <article
            className="small-film-card catalog__films-card"
            key={film.id}
            onPointerEnter={() => {
              this.setState({ selectedFilm: film });
            }}
            onPointerLeave={() => {
              this.setState(null);
            }}
          >
            <FilmCard
              film={film}
            />
          </article>
        ))}
      </div>
    );
  }
}
