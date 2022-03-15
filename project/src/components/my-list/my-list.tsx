import React from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeaderButton from '../header-button/header-button';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ favoriteFilms }: State) => ({
  favoriteFilms,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
class MyList extends React.Component<PropsFromRedux> {

  render() {
    const { favoriteFilms } = this.props;
    return (
      <>
        <HeaderButton /> {/* Есть лишние строчки с 42 */}
        <div className="user-page">

          <Header MyListHeading />

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <div className="catalog__films-list">
              {favoriteFilms.map((film: Film) => (
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
          </section>

          <Footer />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(MyList);
