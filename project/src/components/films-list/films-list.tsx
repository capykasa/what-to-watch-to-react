import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { selectFilm } from '../../store/action';
import { Actions } from '../../types/actions';
import { Film } from '../../types/films';
import { State } from '../../types/state';
import FilmCard from '../film-card/film-card';

const mapStateToProps = ({ selectedFilm, films }: State) => ({
  selectedFilm,
  films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectFilm(selectedFilm: Film | null) {
    dispatch(selectFilm(selectedFilm));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
class FilmsList extends React.Component<PropsFromRedux> {

  render() {
    const { onSelectFilm, films } = this.props;

    return (
      <div className="catalog__films-list">
        {films.map((film: Film) => (
          <article
            className="small-film-card catalog__films-card"
            key={film.id}
            onPointerEnter={() => {
              onSelectFilm(film);
            }}
            onPointerLeave={() => {
              onSelectFilm(null);
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
