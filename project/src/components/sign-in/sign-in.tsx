import React, { ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { store } from '../..';
import browserHistory from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';
import { loginAction } from '../../store/api-actions';
import { State } from '../../types/state';
import Footer from '../footer/footer';
import HeaderButton from '../header-button/header-button';
import Logo from '../logo/logo';

type MyState = {
  email: string;
  password: string;
}

const mapStateToProps = ({ authorizationStatus, username }: State) => ({
  authorizationStatus,
  username,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class SignIn extends React.Component<PropsFromRedux, MyState> {
  constructor(props: PropsFromRedux) {
    super(props);

    this.state = {
      email: props.username,
      password: '',
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (this.state.email !== '' && this.state.password !== '') {
      store.dispatch(loginAction({
        login: this.state.email,
        password: this.state.password,
      }));
    }
  }

  componentDidMount() {
    const { authorizationStatus } = this.props;
    if (authorizationStatus === AuthorizationStatus.Auth) {
      browserHistory.push(AppRoute.Main);
    }
  }

  componentDidUpdate() {
    const { authorizationStatus } = this.props;
    if (authorizationStatus === AuthorizationStatus.Auth) {
      browserHistory.push(AppRoute.Main);
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <>
        <HeaderButton /> {/* Лишние строчки с 42 */}
        <div className="user-page">
          <header className="page-header user-page__head">
            <Logo />

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <form action="#" className="sign-in__form"
              onSubmit={this._handleSubmit}
            >
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="user-email"
                    required
                    value={email}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                      this.setState({ email: target.value });
                    }}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="user-password"
                    pattern="(?=.*\d)(?=.*[A-Za-z]).*"
                    title="Пароль должен содержать минимум одну букву и цифру"
                    required
                    value={password}
                    onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                      this.setState({ password: target.value });
                    }}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(SignIn);
