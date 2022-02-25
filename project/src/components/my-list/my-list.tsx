import Footer from '../footer/footer';
import HeaderAccount from '../header-account/header-account';
import HeaderButton from '../header-button/header-button';

function MyList(): JSX.Element {

  return (
    <>
      <HeaderButton /> {/* Есть лишние строчки с 42 */}
      <div className="user-page">
        <HeaderAccount /> {/* Не хватает  <h1 class="page-title user-page__title">My list</h1> */}

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
