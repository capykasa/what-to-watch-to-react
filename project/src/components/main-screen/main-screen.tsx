import FilmsList from '../films-list/films-list';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import HeaderFilm from '../header-film/header-film';
import HeaderAccount from '../header-account/header-account';
import HeaderButton from '../header-button/header-button';

type MainScreenProps = {
  filmsCount: number;
}

function MainScreen({ filmsCount }: MainScreenProps): JSX.Element {
  return (
    <>
      <HeaderButton />

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderAccount />
        <HeaderFilm />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Catalog />
          <FilmsList
            filmsCount={filmsCount}
          />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
