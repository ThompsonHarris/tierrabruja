import React from 'react';
import { render } from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './app';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
