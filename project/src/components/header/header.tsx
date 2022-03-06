import React from 'react';
import HeaderAccount from '../header-account/header-account';
import Logo from '../logo/logo';

type HeaderAccountProps = {
  MyListHeading?: boolean;
}

export default class Header extends React.Component<HeaderAccountProps> {

  render() {
    const { MyListHeading = false } = this.props;

    return (
      <header className={`page-header ${MyListHeading === true ? 'user-page__head' : 'film-card__head'}`}>
        <Logo />

        {MyListHeading === true ? <h1 className="page-title user-page__title">My list</h1> : ''}

        <HeaderAccount />
      </header>
    );
  }
}
