import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';

import { RootState, setupStore } from './store/store';

import App from './App';

import 'normalize.css';
import './index.scss';
import './ssr-styles.css';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}
/* eslint no-underscore-dangle: 0 */
const store = setupStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
