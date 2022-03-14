import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { store } from '../..';
import { clearFilmData } from '../../store/action';
import { Film } from '../../types/films';
import { State } from '../../types/state';
import FilmCard from '../film-card/film-card';

const mapStateToProps = ({ films }: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
class FilmsList extends React.Component<PropsFromRedux> {

  componentDidMount() {
    store.dispatch(clearFilmData(null, [], []));
  }

  render() {
    const { films } = this.props;

    return (
      <>
        <div className="catalog__films-list">
          {films.map((film: Film) => (
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
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(FilmsList);
