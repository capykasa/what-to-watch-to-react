import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mocks/films';
import { reducer } from './store/reducer';
import { api } from './services/api';
import { redirect } from './store/middlewares/redirect';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
