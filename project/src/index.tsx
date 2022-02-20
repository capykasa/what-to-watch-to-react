import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FILMS_COUNT = 20;

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsCount={FILMS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
