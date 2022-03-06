import React, { ChangeEvent, FormEvent } from 'react';
import HeaderAccount from '../header-account/header-account';
import Logo from '../logo/logo';

const STARS = [9, 8, 7, 6, 5, 4, 3, 2, 1];

type MyState = {
  rating: number | null;
  reviewText: string;
}

export default class AddReview extends React.Component {

  state: MyState = {
    rating: null,
    reviewText: '',
  };

  _handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Отзыв:', this.state);
  };

  render() {

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <HeaderAccount />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            method="post"
            onSubmit={this._handleSubmit}
          >
            <div className="rating">
              <div
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  this.setState({ rating: Number(target.value) });
                }}
                className="rating__stars"
              >
                {STARS.map((star) => (
                  <React.Fragment key={star}>
                    <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} />
                    <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
                  this.setState({ reviewText: target.value });
                }}
              >
              </textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}
