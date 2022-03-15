import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { api } from './services/api';
import { redirect } from './store/middlewares/redirect';
import { checkAuthAction, fetchFavoriteFilmsAction, fetchFilmsAction } from './store/api-actions';
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
store.dispatch(fetchFavoriteFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
