/* eslint-disable no-console */
import React from 'react';

type CatalogProps = {
  genres: string[];
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
    const { genres } = this.props; // ПЕРЕДАТЬ НОВОЕ ЗНАЧЕНИЕ (ВЫБРАННОЕ) В РОДИТЕЛЬСКИЙ КОМПОНЕНТ С ПОМОЩЬЮ ПРОПСА

    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            key={genre}
            className={this.state.sort === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          >
            <span
              className="catalog__genres-link"
              onClick={() => {
                this.setState({ sort: genre });
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
