import FilmsList from '../films-list/films-list';
import Catalog from '../header/catalog/catalog';
import Footer from '../header/footer/footer';
import Header from '../header/header';

type MainScreenProps = {
  filmsCount: number;
}

function MainScreen({ filmsCount }: MainScreenProps): JSX.Element {
  return (
    <>
      <Header />
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
