import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import browserHistory from '../../browser-history';
import { State } from '../../types/state';
import HeaderButton from '../header-button/header-button';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';

const mapStateToProps = ({ selectedFilm }: State) => ({
  selectedFilm,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class Player extends React.Component<PropsFromRedux> {

  render() {
    const { selectedFilm } = this.props;

    if (!selectedFilm) {
      return (
        <div className="player">
          <Logo />
          <LoadingScreen />;
        </div>
      );
    }

    return (
      <>
        <HeaderButton /> {/* Лишние строчки с 42 */}
        <div className="player">
          <video src={selectedFilm.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

          <button
            type="button"
            className="player__exit"
            onClick={() =>
              browserHistory.back()}
          >
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"></progress>
                <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
              </div>
              <div className="player__time-value">{selectedFilm.runTime}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">Transpotting</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(Player);
