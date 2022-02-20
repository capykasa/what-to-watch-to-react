import FilmCard from '../film-card/film-card';

function RelatedMovies(): JSX.Element {

  const createFilmCards = (count: number) => new Array(count).fill(null).map((_, index) => FilmCard(index));

  return (
    <div className="catalog__films-list">
      {createFilmCards}
    </div>
  );
}

export default RelatedMovies;
