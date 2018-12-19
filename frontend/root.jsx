import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import { ActionCableProvider } from 'react-actioncable-provider';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <ActionCableProvider url={'/cable'}>
          <App />
        </ActionCableProvider>
    </HashRouter>
  </Provider>
);

export default Root;
