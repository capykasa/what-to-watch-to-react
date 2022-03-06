import React from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeaderButton from '../header-button/header-button';

type MyListProps = {
  films: Film[];
}
export default class MyList extends React.Component<MyListProps> {

  render() {
    const { films } = this.props;
    return (
      <>
        <HeaderButton /> {/* Есть лишние строчки с 42 */}
        <div className="user-page">

          <Header MyListHeading />

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

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
          </section>

          <Footer />
        </div>
      </>
    );
  }
}
