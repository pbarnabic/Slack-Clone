import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import {API_WS_ROOT} from '../constants/constants.js';
import { ActionCableProvider } from 'react-actioncable-provider';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <ActionCableProvider url={'/cable'}>
          <App />
        </ActionCableProvider>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
