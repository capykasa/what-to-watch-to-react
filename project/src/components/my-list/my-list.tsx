/* eslint-disable jsx-a11y/anchor-is-valid */
import FilmCard from '../film-card/film-card';
import Footer from '../footer/footer';
import HeaderAccount from '../header-account/header-account';
import HeaderButton from '../header-button/header-button';

function MyList(): JSX.Element {

  const createFilmCards = (count: number) => new Array(count).fill(null).map((_, index) => FilmCard(index));

  return (
    <>
      <HeaderButton /> {/* Есть лишние строчки с 42 */}
      <div className="user-page">
        <HeaderAccount /> {/* Не хватает  <h1 class="page-title user-page__title">My list</h1> */}

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {createFilmCards}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
