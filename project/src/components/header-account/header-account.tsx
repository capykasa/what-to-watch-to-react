import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';

type HeaderAccountProps = {
  MyListHeading?: boolean;
}

export default class HeaderAccount extends React.Component<HeaderAccountProps> {

  render() {
    const { MyListHeading = false } = this.props;

    return (
      <header className={`page-header ${MyListHeading === true ? 'user-page__head' : 'film-card__head'}`}>
        <Logo />

        {MyListHeading === true ? <h1 className="page-title user-page__title">My list</h1> : ''}

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppRoute.MyList}>
                <img src="../img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link to='' className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
    );
  }
}
