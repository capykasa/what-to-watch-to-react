import React from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const { films } = props;

  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => (
        <React.Fragment key={film.id}>
          <FilmCard
            film={film}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilmsList;
