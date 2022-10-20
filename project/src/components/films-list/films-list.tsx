import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { MAIN_CATALOG_ITEM } from '../../const';
import { Film } from '../../types/films';
import { State } from '../../types/state';
import { createGenresList } from '../../utils';
import Catalog from '../catalog/catalog';
import FilmCard from '../film-card/film-card';

const mapStateToProps = ({ currentGenre, films }: State) => ({
  currentGenre,
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
class FilmsList extends React.Component<PropsFromRedux> {

  render() {
    const { currentGenre, films } = this.props;

    const currentFilms = films.filter((film) => film.genre === currentGenre || currentGenre === MAIN_CATALOG_ITEM);
    const genres = [MAIN_CATALOG_ITEM, ...createGenresList(films)];

    return (
      <>
        <Catalog
          genres={genres}
          currentGenre={currentGenre}
        />
        <div className="catalog__films-list">
          {currentFilms.map((film: Film) => (
            <article
              className="small-film-card catalog__films-card"
              key={film.id}
            >
              <FilmCard
                film={film}
              />
            </article>
          ))}
        </div>
        {/* <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div> */}
      </>
    );
  }
}

export default connect(mapStateToProps)(FilmsList);
