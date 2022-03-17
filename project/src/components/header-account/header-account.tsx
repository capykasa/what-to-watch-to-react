import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../..';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { State } from '../../types/state';

const mapStateToProps = ({ authorizationStatus }: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class HeaderAccount extends React.Component<PropsFromRedux> {

  render() {
    const { authorizationStatus } = this.props;

    return (
      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.Auth
          ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <Link to={AppRoute.MyList}>
                  <img src="../../img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </Link>
              </div>
            </li>
            <li className="user-block__item">
              <Link
                className="user-block__link"
                to='/'
                onClick={(evt) => {
                  evt.preventDefault();
                  store.dispatch(logoutAction());
                }}
              >
                Sign out
              </Link>
            </li>
          </>
          :
          <li className="user-block__item">
            <Link
              className="user-block__link"
              to={AppRoute.SignIn}
            >
              Sign in
            </Link>
          </li>}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(HeaderAccount);
