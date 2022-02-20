import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  filmsCount: number;
}

function FilmsList({ filmsCount }: FilmsListProps): JSX.Element {

  const createFilmCards = (count: number) => new Array(count).fill(null).map((_, index) => FilmCard(index));

  return (
    <div className="catalog__films-list">
      {createFilmCards(filmsCount)}
    </div>
  );
}

export default FilmsList;
