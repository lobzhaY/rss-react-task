import 'vite/modulepreload-polyfill';

import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

import App from './App';
import { fetchAllCards } from './store/reducers/ActionCreators';

import './App.scss';
import './index.css';

const store = setupStore();

/* eslint-disable import/prefer-default-export */
export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  await store.dispatch(fetchAllCards(''));
  const preloadedState = store.getState();
  const injectPreload = () => {
    return `
          <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    `;
  };

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );

  return { stream, injectPreload };
}
