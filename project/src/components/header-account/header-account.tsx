import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default class HeaderAccount extends React.Component {

  render() {

    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src="../../img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link to='' className="user-block__link">Sign out</Link>
        </li>
      </ul>
    );
  }
}
