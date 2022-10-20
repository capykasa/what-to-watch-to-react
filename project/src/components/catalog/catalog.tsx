import React from 'react';
import { store } from '../..';
import { selectGenre } from '../../store/action';

type CatalogProps = {
  genres: string[];
  currentGenre: string;
}

type MyState = {
  sort: string;
}

class Catalog extends React.Component<CatalogProps, MyState> {
  constructor(props: CatalogProps) {
    super(props);

    this.state = {
      sort: this.props.genres[0],
    };
  }

  render() {
    const { genres, currentGenre } = this.props;

    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            key={genre}
            className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          >
            <span
              className="catalog__genres-link"
              onClick={() => {
                store.dispatch(selectGenre(genre));
              }}
            >
              {genre}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Catalog;
